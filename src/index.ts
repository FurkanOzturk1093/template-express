import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DeployWise Express Template</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #09090b; color: #fff; font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
        .card { text-align: center; padding: 3rem; }
        .badge { display: inline-block; background: #10b98120; color: #10b981; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem; }
        h1 { font-size: 2rem; margin-bottom: 0.5rem; }
        p { color: #71717a; margin-bottom: 1.5rem; }
        a { color: #10b981; text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">Express.js</div>
        <h1>Deployed with DeployWise</h1>
        <p>Minimal Express.js + TypeScript starter template</p>
        <a href="https://deploywise.dev">deploywise.dev</a>
      </div>
    </body>
    </html>
  `);
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
