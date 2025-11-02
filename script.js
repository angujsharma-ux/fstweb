document.getElementById("adminWelcome").textContent = "Welcome, Aditya 👑";
document.querySelector('[data-target="subscribeSection"]').addEventListener('click', ()=>{
  window.open('https://www.youtube.com/...','_blank');
});
window.open('https://www.youtube.com/@X-vraxxen','_blank');
document.querySelectorAll('.cardItem').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target = btn.dataset.target;
    document.querySelectorAll('.card').forEach(c=>c.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
  });
});
// 🔄 Menu switching logic
document.querySelectorAll('.cardItem').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target = btn.dataset.target;
    document.querySelectorAll('.card').forEach(c=>c.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
  });
});
