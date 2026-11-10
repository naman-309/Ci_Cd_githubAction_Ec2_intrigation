# 🚀 Automated CI/CD Pipeline: GitHub Actions to AWS EC2

A robust, production-ready continuous integration and continuous deployment (CI/CD) pipeline that automates testing, container image builds, and zero-downtime deployment to an **AWS EC2** instance using **GitHub Actions**, **Docker**, and **SSH**.

---

## 📌 Architecture & Workflow

Every push to the `main` branch triggers an automated pipeline that validates code, packages artifacts, and deploys directly to AWS EC2:

```text
 ┌──────────────┐       ┌──────────────────────┐       ┌────────────────────────┐
 │  Developer   │ ────> │    GitHub Push to    │ ────> │     GitHub Actions     │
 │  Git Commit  │       │     `main` Branch    │       │     CI/CD Runner       │
 └──────────────┘       └──────────────────────┘       └───────────┬────────────┘
                                                                   │
                                    ┌──────────────────────────────┘
                                    │ (SSH Deploy via Action)
                                    ▼
                         ┌──────────────────────┐
                         │     AWS EC2 Host     │
                         │ ──────────────────── │
                         │ • Pull Latest Code   │
                         │ • Docker Build / Run │
                         │ • Container Reload   │
                         └──────────────────────┘
