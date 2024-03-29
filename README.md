# ChatGPT Chatbot with Express Backend and React Frontend

This is a simple Express.js backend application that serves as an interface between a frontend application and the OpenAI GPT-3.5-turbo chat model. The frontend can send chat messages to the backend, and the backend sends those messages to the OpenAI API to generate responses.

## Prerequisites

Before running the application, make sure you have the following:

- [Node.js](https://nodejs.org/) installed
- OpenAI API key (Get it from [OpenAI Platform](https://platform.openai.com/signup))

## Getting Started 

1. Clone this repository:

   ```bash
   git clone https://github.com/laguagu/chatgpt-chatbot.git
   ```

   cd backend

   ```bash
   npm install
   ```

2. Create a .env file in the root directory with your OpenAI API key:

   ```text
   OPENAI_API_KEY=your-api-key-here
   ```

3. Start the Express server:

   ```bash
   npm run dev
   ```

The server will run on <http://localhost:3000>

## Usage

Send POST requests to /api/chat with a JSON body containing the chat message. The server will respond with the generated message from the OpenAI model.

Example using cURL:

   ```text
   curl -X POST -H "Content-Type: application/json" -d '{"input":"Hello, how are you?"}' http://localhost:3000/api/chat
   ```

## Frontend

cd frontend
1. install dependencies 
   ```bash
   npm install
   ```
2. Start React
  ```bash
   npm run dev
   ```
