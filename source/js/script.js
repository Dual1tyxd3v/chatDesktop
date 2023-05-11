const images = document.querySelectorAll('img');
const inp = document.querySelector('input[type="file"]');
images.forEach(img => {
  img.style.width = '300px';
});


inp.addEventListener('change', (e) => {
  const x = e.target.files[0];
})
