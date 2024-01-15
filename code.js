const content = document.querySelector('.card');
const thanksMess = document.querySelector('.card-2');
const subscribeBtn = document.getElementById('subscribing-btn');
const dismissBtn = document.querySelector('#dismiss-btn');
let insideTxt = document.querySelector('.inside-content');
let emailInput = document.querySelector('input');

subscribeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  content.classList.add("hide");
  thanksMess.classList.remove("hide");
  insideTxt.textContent = emailInput.value;
});

dismissBtn.addEventListener('click', (e) => {
  window.location.reload();
});





