// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(tp) =>{
    cursor.style.top = tp.pageY + 'px';
    cursor.style.left = tp.pageX + 'px';
})

// Navbar
window.addEventListener('scroll',function(){
    var navbar = document.querySelector('nav');
    navbar.classList.toggle("animasi",window.scrollY > 0);
})