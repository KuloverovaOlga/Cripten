function burgerMeny() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;
    const overlay = document.querySelector('.overlay');
    const navItems = document.querySelectorAll('.header__nav-item');

    function openBurger() {
        document.body.style.cssText = `
        overflow: hidden;
        height: 100vh;
        width:100vw;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px`;

        burger.classList.add('active');
        nav.classList.add('active');
        overlay.classList.add('active');
    }

    function closeBurger() {
        body.style.overflow = '';
        nav.classList.remove('active');
        burger.classList.remove('active');
        overlay.classList.remove('active');
    }

    burger.addEventListener('click', () => {
        burger.classList.contains('active') ? closeBurger() : openBurger();
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeBurger();
        }
    });

    navItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            closeBurger();
        });
    });
}

export default burgerMeny;
