// chat messages have the following  : username, message, timestamp

class ChatMessage {
  constructor(data){
    this.data = data;

    this.username = data.username;
    this.timeStamp = data.timeStamp;
    this.message = data.message;
  }

  render(parentElement){
    let container = document.createElement('div');
    let message = document.createElement('span');
    let username = document.createElement('span');
    let timeStamp = document.createElement('span');

    username.classList.add('username');
    timeStamp.classList.add('timeStamp');
    container.classList.add('chat-message');

    timeStamp.textContent = this.timeStamp + ' ';
    username.textContent = this.username + ': ';
    message.textContent = this.message;

    container.appendChild(timeStamp);
    container.appendChild(username);
    container.appendChild(message);

    parentElement.appendChild(container);
  }
}