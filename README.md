# Makram Al Moghrabi — Portfolio

Personal portfolio and interactive developer site for [makramalmoghrabi.com](https://makramalmoghrabi.com).

Full-stack software engineer portfolio built with **React**, **TypeScript**, **Vite**, and **Three.js** — featuring a 3D character scene, project showcase, chess mini-game, and an AI chat endpoint powered by Groq.

## Live site

- **Portfolio:** [https://makramalmoghrabi.com](https://makramalmoghrabi.com)
- **GitHub:** [https://github.com/makram24](https://github.com/makram24)

## Features

- **3D landing experience** — React Three Fiber character scene with GSAP-driven scroll animations
- **Single-page sections** — About, education, certifications, tech stack, engineering projects, contact
- **My Works** — Dedicated project gallery route (`/myworks`)
- **Play** — Interactive chess / pixel-room experience (`/play`)
- **AI chat** — Serverless `/api/chat` using the Groq API (Vercel serverless function)
- **Analytics** — Optional Vercel Analytics & Speed Insights (enabled via env on Vercel only)
- **Flexible hosting** — Deploy on Vercel or static build on Apache/cPanel with SPA routing

## Tech stack

| Layer | Tools |
|--------|--------|
| UI | React 18, TypeScript, React Router |
| 3D | Three.js, React Three Fiber, Drei, Rapier/Cannon |
| Motion | GSAP, Lenis |
| Build | Vite 5 |
| API | Vercel serverless (`api/chat.js`) + Groq |
| Lint | ESLint 9 |

## Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** (or pnpm/yarn)
- **Git LFS** — large assets (e.g. `.glb` models) may use LFS; install [Git LFS](https://git-lfs.com/) before clone

## Getting started

```bash
git clone https://github.com/makram24/portfolio-website.git
cd portfolio-website
git lfs pull          # if models/assets are missing
npm install
cp .env.example .env  # then edit .env
npm run dev