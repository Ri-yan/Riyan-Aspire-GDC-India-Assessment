import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { initWebSocket } from "./wss.js";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (index.html etc.)
app.use(express.static(path.join(__dirname, "public")));

// Create HTTP server
const server = createServer(app);

// Init WebSocket server (in separate file)
initWebSocket(server);

server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});