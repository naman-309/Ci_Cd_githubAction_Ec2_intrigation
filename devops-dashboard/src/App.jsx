
import { useEffect, useState } from 'react';
import './App.css';
import Hero from './Hero';
import About from './About';
const API_URL = '';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [projectInfo, setProjectInfo] = useState(null);

  useEffect(() => {
    async function fetchBackendData() {
      try {
        // API 1: Check backend health
        const healthResponse = await fetch(
          `${API_URL}/api/health`
        );

        if (!healthResponse.ok) {
          throw new Error('Health API request failed');
        }

        const healthData = await healthResponse.json();

        setBackendStatus(healthData.status);

        // API 2: Get project information
        const infoResponse = await fetch(
          `${API_URL}/api/info`
        );

        if (!infoResponse.ok) {
          throw new Error('Info API request failed');
        }

        const infoData = await infoResponse.json();

        setProjectInfo(infoData);
      } catch (error) {
        console.error('Backend connection error:', error);
        setBackendStatus('offline');
      }
    }

    fetchBackendData();
  }, []);

  return (
    <div className="page">
      <nav className="navbar">
        <h2>
          DevOps<span>Lab.</span>
        </h2>
        <p>Learning by Building</p>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="tag">
            <span className="dot"></span>
            MY DEVOPS LEARNING PROJECT
          </div>

          <h1>
            From Localhost
            <br />
            to <span>Live Server.</span>
          </h1>

          <p className="description">
            A simple full-stack project built to understand
            Docker, backend APIs, AWS EC2 and automated
            deployment using GitHub Actions.
          </p>

          <div className="tech-stack">
            {(projectInfo?.technologies || [
              'React',
              'Node.js',
              'Docker',
              'AWS EC2',
              'GitHub Actions'
            ]).map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <p className="backend-status">
            Backend:{' '}
            <span>
              {backendStatus === 'online'
                ? '🟢 Online'
                : backendStatus === 'offline'
                  ? '🔴 Offline'
                  : '🟡 Checking...'}
            </span>
          </p>

          {projectInfo && (
            <p className="backend-info">
              Connected to: {projectInfo.name}
            </p>
          )}
        </div>

        <div className="workflow">
          <p className="workflow-title">
            DEPLOYMENT WORKFLOW
          </p>

          <div className="workflow-item">
            <div className="number">01</div>
            <div>
              <h3>Build</h3>
              <p>Create the frontend and backend</p>
            </div>
          </div>

          <div className="line"></div>

          <div className="workflow-item">
            <div className="number">02</div>
            <div>
              <h3>Containerize</h3>
              <p>Package the app with Docker</p>
            </div>
          </div>

          <div className="line"></div>

          <div className="workflow-item">
            <div className="number">03</div>
            <div>
              <h3>Deploy</h3>
              <p>Run the application on AWS EC2</p>
            </div>
          </div>

          <div className="line"></div>

          <div className="workflow-item">
            <div className="number">04</div>
            <div>
              <h3>Automate</h3>
              <p>Deploy automatically after Git push</p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>
          Built to understand DevOps, one step at a time.
        </p>
        <span>React · Node.js · Docker · AWS</span>
        <Hero></Hero>
        <About></About>
      </footer>

    </div>
  );
}

export default App;
