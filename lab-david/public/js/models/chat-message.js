// chat messages have the following  : username, message, timestamp

class ChatMessage {
  constructor(message){
    this.username = message.username;
    this.data = message.data;
    this.timeStamp = message.timeStamp;

    this.message = message.message;
  }

render(parentElement){
  let container = document.createElement('div');
  let message = document.createElement('span');
  let username = document.createElement('span');
  let timeStamp = document.createElement('span');

  username.classList.add('username');
  timeStamp.classList.add('timeStamp');
  container.classList.add('message');

  timeStamp.textContent = this.timeStamp;
  username.textContent = this.username + ':';
  message.textContent = this.message;

  container.appendChild(timeStamp);
  container.appendChild(username);
  container.appendChild(message);

  parentElement.appendChild(container);
  }
}