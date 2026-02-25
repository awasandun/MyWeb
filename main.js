const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menu) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        if (navbar) navbar.classList.toggle('active');
    }
}

window.onscroll = () => {
    if (menu) menu.classList.remove('bx-x');
    if (navbar) navbar.classList.remove('active');
}


const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer' , 'Backend Developer.' , 'Web Designer' , 'You Tuber'],
      typeSpeed: 80,
      backSpeed:80,
      backDelay:1200,
      loop:true,
    });
  