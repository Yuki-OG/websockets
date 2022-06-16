const socket = io('ws://localhost:3000');

socket.on('message', text => {
  let li = document.createElement('li');
  li.innerText = text;
  document.getElementById('messages').appendChild(li);
})

document.getElementById('button').onclick = () => {
  let text = document.getElementById('input').value;
  // socket.emit('message', text);
}