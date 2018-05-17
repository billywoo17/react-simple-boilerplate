// server.js

const express = require('express');
const WebSocket = require('ws');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

let usercount = 0;

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  usercount += 1;
  //read message
   ws.on('message', function incoming(message) {
    const myMessage = JSON.parse(message);
    console.log(myMessage);
    let messageObject = {};
    switch(myMessage.messageType){
      case "message" :
      messageObject = {
        id: getId(),
        username: myMessage.username,
        content: myMessage.message,
        messageType: myMessage.messageType,
      };
      break;
      case "notification":
      messageObject = {
        id: getId(),
        oldname: myMessage.oldname,
        username: myMessage.username,
        messageType: myMessage.messageType,
      };
      break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + data.type);
    }
    wss.broadcast(messageObject);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    usercount -= 1;
    wss.broadcast({
      usercount:usercount,
      messageType: "userCount",
    });
    console.log('Client disconnected');
  });
  wss.broadcast({
    usercount:usercount,
    messageType: "userCount",
  });
});

//generate and Id for each message send to us
let id = 1;
const getId = () => {
  id = id + 1;
  return id;
};

// function for boardcast to all clients
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};
