'use strict';

console.log('this is live');

const socket = io();
console.log('ID:', socket.id)


// <form id="send-message-form">
// <input id="message-input" type="text"/>
// <button type="submit">send message</button>
// </form>

// <div id="messageBox"></div>

let sendMessageForm = document.getElementById('send-message-form');
let messageInput = document.getElementById('message-input');
let messagesContainer = document.getElementById('messagesBox');

sendMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let message = messageInput.value;
  socket.emit('send-message', {message});
})

socket.on('receive-message', (data) => {
  console.log('RECEIVED:', data)
  let newDiv = document.createElement('div');
  newDiv.innerHTML = data.message;
  messagesContainer.appendChild(newDiv);
})