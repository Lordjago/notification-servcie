const express = require('express');
const bodyParser = require('body-parser');
const EventEmitter = require('events');

const app = express();
const port = process.env.PORT || 3000;

// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Use body-parser middleware for parsing JSON requests
app.use(bodyParser.json());

// Endpoint for clients to subscribe to notifications
app.post('/subscribe', (req, res) => {
  const { endpoint, keys } = req.body;

  // Store subscription information (in-memory for simplicity)
  const subscription = { endpoint, keys };
  eventEmitter.on('sendNotification', (notification) => {
    sendNotification(subscription, notification);
  });

  console.log('Client subscribed:', subscription);
  res.status(200).json({ message: 'Subscription successful' });
});

// Endpoint for sending notifications
app.post('/send-notification', (req, res) => {
  const { message } = req.body;

  // Emit the 'sendNotification' event with the message
  eventEmitter.emit('sendNotification', message);

  console.log('Notification sent:', message);
  res.status(200).json({ message: 'Notification sent successfully' });
});

// Function to send a notification to a subscribed client
function sendNotification(subscription, message) {
  // Here, you would implement logic to send a notification to the client using Web Push, FCM, etc.
  // For simplicity, we'll just log the message for now.
  console.log('Sending notification to:', subscription.endpoint, 'Message:', message);
}

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
