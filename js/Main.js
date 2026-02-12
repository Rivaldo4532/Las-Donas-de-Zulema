function goToHome(){
    document.getElementById('welcome').classList.remove('active');
    document.getElementById('home').classList.add('active');
}

// Animación scroll fade-in
const items = document.querySelectorAll('.menu-card, .topping-card');
window.addEventListener('scroll', ()=>{
    const trigger = window.innerHeight / 1.1;
    items.forEach(item=>{
        const top = item.getBoundingClientRect().top;
        if(top < trigger) item.classList.add('visible');
    });
});
