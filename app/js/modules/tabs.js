const tabs = () => {
    const buttonsBox = document.querySelector('.calculator__nav');
    const buttons = document.querySelectorAll('.calculator__button');
    const tabs = document.querySelectorAll('.calculator__tab-panel');

    buttons.forEach((item,i) => {
        item.dataset.tab = `#tab_${i+1}`;
    });

    tabs.forEach((item,i) => {
        item.setAttribute('id', `tab_${i+1}`);
    });


    buttonsBox.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);

        if (target.classList.contains('calculator__button')) {
            buttons.forEach((e) => {
                e.classList.remove('active');
            });
            tabs.forEach((e) => {
                e.classList.remove('active');
            });
            let tab = target.getAttribute('data-tab');
            let tabContent = document.querySelector(tab)
            target.classList.add('active');
            tabContent.classList.add('active');
        }
    });
};

export default tabs;
