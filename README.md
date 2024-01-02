# SIMPLE NOTIFICATION SERVICE

## Setup

- run ```npm install``` to install all required packages
- run ```node server.js``` to start the server


## Introduction
A simple notifcation service that was created for a system to send notifications to users or devices based on specific events or triggers...


### Test the Notification Service: 

- Use a tool like Postman or curl to make HTTP requests.

- Subscribe a client to receive notifications:

```{{curl -X POST -H "Content-Type: application/json" -d '{"endpoint": "example-endpoint", "keys": {"p256dh": "example-p256dh", "auth": "example-auth"}}' http://localhost:3000/subscribe}}
```


- Send a notification:


```{{curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello, subscribers!"}' http://localhost:3000/send-notification}}
```