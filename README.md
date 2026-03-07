# DeployWise — Express.js Template

A production-ready Express.js API starter with TypeScript, pre-configured for one-click deployment to your VPS with [DeployWise](https://deploywise.dev).

## What's Included

- Express 5 with TypeScript
- Build step with `tsc`
- Optimized for PM2 + Nginx deployment

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy with DeployWise

1. Push this repo to GitHub
2. Open [deploywise.dev/dashboard](https://deploywise.dev/dashboard)
3. Add your VPS → Create a project → Select this repo
4. Click **Deploy**

DeployWise automatically runs `tsc` to build, starts with PM2 (`node dist/index.js`), configures Nginx reverse proxy, and issues a free SSL certificate.

## Project Structure

```
├── src/
│   └── index.ts      # Express app entry point
├── dist/             # Compiled output
├── tsconfig.json     # TypeScript config
└── package.json
```

## Learn More

- [Deploy Express to VPS Guide](https://deploywise.dev/guides/deploy-express-to-vps)
- [DeployWise Docs](https://deploywise.dev/docs)
- [Express Documentation](https://expressjs.com)

---

Deployed with [DeployWise](https://deploywise.dev) — free, open source.
