
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// API 1: Check backend status
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        status: 'online',
        message: 'DevOpsLab backend is running'
    });
});

// API 2: Get project information
app.get('/api/info', (req, res) => {
    res.status(200).json({
        name: 'DevOpsLab',
        purpose: 'Learn Docker, AWS EC2 and CI/CD',
        technologies: [
            'React',
            'Node.js',
            'Express',
            'Docker',
            'AWS EC2',
            'GitHub Actions'
        ]
    });
});

export default app;
