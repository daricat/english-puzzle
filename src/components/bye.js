export default function initBye() {
  const message = document.createElement('div');
  document.querySelector('.main').append(message);
  message.classList.add('message');
  message.textContent = 'Bye';
}
