// chat messages have the following  : username, message, timestamp

class Messages {
  constructor(message){
    this.username = username;
    this.data = data;
    this.timeStamp = timeStamp;

    this.message = message;
  }

render(parentElement){
  let container = document.createElement('div');
  let message = document.createElement('span');
  let username = document.createElement('span');
  let timeStamp = document.createElement('span');

  username.classList.add('username');
  timeStamp.classList.add('timeStamp');
  container.classList.add('message');


  container.appendChild(timeStamp);
  container.appendChild(username);
  container.appendChild(message);




  parentElement.appendChild(container);
  }
}