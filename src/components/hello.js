export default function initHello() {
  const message = document.createElement('div');
  document.querySelector('.main').append(message);
  message.classList.add('message');
  message.textContent = 'Hello';
}
