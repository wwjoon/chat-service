const socket = io('/messenger');

const getElementById = (id) => document.getElementById(id) || null;

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username);
  socket.on('hello_user', (data) => {
    console.log(data);
  });
  return 'hello return';
}

function init() {
  helloUser();
}

init();
