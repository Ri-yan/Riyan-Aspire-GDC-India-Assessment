# Aspire GDC India Voice Agent 

model used : gemini-2.5-flash-native-audio-preview-12-2025
email service : emailJS

<img width="1751" height="868" alt="image" src="https://github.com/user-attachments/assets/ae1ce33f-c6c0-4332-884c-606dc6aa2b5a" />

on signout will sent email with conversation history apart from that it keep maintain history in local storage of browser

## 🌐 Overview  
This project is a **real-time AI chatbot** built with **Node.js**, **Express**, **WebSockets**, and **Google’s Gemini API**.  

It enables users to chat with an intelligent assistant that supports **multilingual conversations** and can be extended with **voice input/output** using **Speech-to-Text** and **Text-to-Speech (TTS)** services.  

👉 Workflow:  
1. User sends a **text/voice message** from the frontend (`public/index.html`).  
2. The backend (`wss.js` + `main.js`) forwards it to **Gemini API**.  
3. Gemini generates a response.  
4. The response is returned to the client via WebSocket and displayed (or spoken).  

---

## ✨ Features  
- 🤖 **AI-powered chatbot** with Gemini API  
- 🔌 **Real-time communication** using WebSockets  
- 🌐 **Multilingual support** (Gemini auto-detects language)  
- 🎤 **Voice support** via Speech-to-Speech  
- 📦 **Modular Node.js architecture**
- 😎 **support user interrupt**

---
## DEMO
[![Watch the video](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://drive.google.com/file/d/1cdtY8rJJWCAu3J9iBv5689OE6ELrHDoM/view)



## Project Structure
```
.
├── main.js            # Main entry point of the application
├── server.js          # Express.js server configuration
├── wss.js             # WebSocket server implementation
├── public/
│   └── index.html     # Frontend client UI
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Dependency lock file
└── README.md          # Project documentation
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Start the server with:
```bash
node server.js
```
## env
Copy Edit
```bash
GEMINI_API_KEY=your_api_key_here
```
🔑 Get your key from Google AI Studio.

The application will be available at:  
👉 `http://localhost:8080`

---

## Example Usage

### 1. Starting the WebSocket Server
Inside **wss.js**, the WebSocket server handles connections like this:
```js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');
  
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => console.log('Client disconnected'));
});
```

### 2. Connecting from the Client (index.html)
In your **public/index.html**, you can connect to the WebSocket server:
```html
<script>
  const socket = new WebSocket("ws://localhost:8080");

  socket.onopen = () => {
    console.log("Connected to WebSocket server");
    socket.send("Hello Server!");
  };

  socket.onmessage = (event) => {
    console.log("Message from server:", event.data);
  };
</script>
```

This will send messages to the server and display responses in the browser console.

---

## Scripts
Add custom npm scripts in `package.json`. Example:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Run with:
```bash
npm start   # Start normally
npm run dev # Start with auto-reload (requires nodemon)
```

## Technologies Used
- **Node.js**
- **Express.js**
- **WebSockets**
- **HTML5 / JavaScript**





Checkout the original one too : 
https://live.revoltmotors.com/



