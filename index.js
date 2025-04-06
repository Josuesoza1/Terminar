const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

// Movimiento aleatorio del botón "No"
noBtn.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

// Acción cuando se da click en "Sí"
yesBtn.addEventListener('click', () => {
  message.style.display = 'block';
  message.textContent = "¡Sabía que me querías! ❤️";
  yesBtn.style.backgroundColor = "#45a049";
  yesBtn.disabled = true;
  noBtn.disabled = true;
});

// Acción cuando se da click en "No"
noBtn.addEventListener('click', () => {
  message.style.display = 'block';
  message.textContent = "¡¿De verdad?! 😢";
  noBtn.style.backgroundColor = "#e53935";
  yesBtn.disabled = true;
  noBtn.disabled = true;
});
