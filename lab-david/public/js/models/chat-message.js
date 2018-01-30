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


    //<i class="em-svg em---1" id="thumbsUp"></i>
    //<i class="em-svg em--1" id="thumbsDown"></i>
    if (this.message === 'thumbsUp') {
      let ii = document.createElement('i');
      ii.classList.add('em-svg')
      ii.classList.add('em---1')
      message.appendChild(ii)
    } else if (this.message === 'thumbsDown') {
      let ii = document.createElement('i');
      ii.classList.add('em-svg')
      ii.classList.add('em--1')
      message.appendChild(ii)
    } else {
      message.textContent = this.message;
    }

    container.appendChild(timeStamp);
    container.appendChild(username);
    container.appendChild(message);

    parentElement.appendChild(container);
  }
}