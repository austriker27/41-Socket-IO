'use strict';

console.log('this is live');

const socket = io();
console.log('ID:', socket.id);


//-------------------------------------------------------------
// HANDLE MESSAGES
//-------------------------------------------------------------
let sendMessageForm = document.getElementById('send-message-form');
let messageInput = document.getElementById('message-input');
let messagesContainer = document.getElementById('messagesArea');
let upVote = document.getElementById('thumbsUp');
let downVote = document.getElementById('thumbsDown');

sendMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let message = messageInput.value;
  socket.emit('send-message', {message});
});

socket.on('receive-message', (data) => {
  console.log('RECEIVED:', data);
  
  let message = new ChatMessage(data);
  message.render(messagesContainer);

});

upVote.addEventListener('click', (event) => {
  event.preventDefault();
  let message = {upVote};
  socket.emit('send-message', {message});
});


downVote.addEventListener('click', (event) => {
  event.preventDefault();
  let message = downVote;
  socket.emit('send-message', {message});
});

//-------------------------------------------------------------
// HANDLE USERNAME
//-------------------------------------------------------------
let sendUsernameForm = document.getElementById('set-username-form');
let usernameInput = document.getElementById('username-input');

sendUsernameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = usernameInput.value;
  socket.emit('set-username', {username});
});