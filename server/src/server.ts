import express from 'express';
import payload from 'payload';
import cors from 'cors';

require('dotenv').config();
const app = express();
app.use(cors({
  origin: 'http://localhost:3001',
}))

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3000);