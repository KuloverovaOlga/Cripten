const select = () => {
    const selectBox = document.querySelector('.calculator__select-box');
    const selectHeader = document.querySelector('.calculator__select-header');
    const selectCurrent = document.querySelector('.calculator__select-current');
    const selectBody = document.querySelector('.calculator__select-body');

    const selectToggle = () => {
        selectBox.classList.toggle('active');
    };

    const selectClose = (item) => {
        selectCurrent.textContent = item.innerText;
    };

    selectHeader.addEventListener('click', () => {
        selectToggle();
    });

    selectBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('calculator__select-item')) {
            selectToggle();
            selectClose(e.target);
        }
    });
};

export default select;
