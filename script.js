const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const usernameInput = document.getElementById('username');
const messages = document.getElementById('messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const message = input.value.trim();
  const user = usernameInput.value.trim();
  if (!message || !user) return;

  socket.emit('chat message', { message, user });
  input.value = '';
});

socket.on('chat message', ({ message, user, timestamp }) => {
  const item = document.createElement('li');
  const currentUser = usernameInput.value.trim();
  item.className = user === currentUser ? 'you' : 'other';

  const initial = user.charAt(0).toUpperCase();

  item.innerHTML = `
    <div class="avatar">${initial}</div>
    <div class="message-content">
      <strong>${user}</strong><br>
      ${message}
      <div class="timestamp">${timestamp}</div>
    </div>
  `;

  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});
