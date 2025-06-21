const cookiePopup = document.getElementById('cookiePopup');
const acceptBtn = document.getElementById('acceptBtn');
const closeBtn = document.getElementById('closeBtn');

if (!localStorage.getItem('cookieAccpted')) {
  cookiePopup.style.display = 'block';
}

acceptBtn.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
  localStorage.setItem('cookieAccpted', 'true');
});

closeBtn.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
});