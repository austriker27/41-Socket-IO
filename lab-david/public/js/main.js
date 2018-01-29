'use strict';

console.log('this is live');

const socket = io();
console.log('ID:', socket.id)


//-------------------------------------------------------------
// HANDLE MESSAGES
//-------------------------------------------------------------
let sendMessageForm = document.getElementById('send-message-form');
let messageInput = document.getElementById('message-input');
let messagesContainer = document.getElementById('messagesArea');

sendMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let message = messageInput.value;
  socket.emit('send-message', {message});
})

socket.on('receive-message', (data) => {
  console.log('RECEIVED:', data)
  let newDiv = document.createElement('div');
  newDiv.innerHTML = data.message
  messagesArea.appendChild(newDiv);
})

//-------------------------------------------------------------
// HANDLE USERNAME
//-------------------------------------------------------------
let sendUsernameForm = document.getElementById('send-username-form');
let usernameInput = document.getElementById('username-input');

sendUsernameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = usernameInput.value;
  socket.emit('send-username', {username});
})