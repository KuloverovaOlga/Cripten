const inputNumber = (parentId, value, step, min, max) => {
    const input = document.querySelector(`${parentId}`);
    const inkr = document.querySelector(`${parentId}-inkr`);
    const decr = document.querySelector(`${parentId}-decr`);
    const buttonBox = document.querySelector(`${parentId}-button-box`);

    input.setAttribute('value', value);
    input.setAttribute('step', step);
    input.setAttribute('min', min);
    input.setAttribute('max', max);

    buttonBox.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        let innerValue = input.getAttribute('value');

        if (target === inkr) {
            innerValue >= max ? (innerValue = min) : innerValue = +innerValue + step;

            input.defaultValue = innerValue;
            input.valueAsNumber = innerValue;
            input.setAttribute('value', innerValue);

        }
        if (target === decr) {
            ((innerValue <= min) || (innerValue > max)) ? (innerValue = max) : innerValue = +innerValue - step;

            input.defaultValue = innerValue;
            input.valueAsNumber = innerValue;
            input.setAttribute('value', innerValue);

        }
    });

    input.addEventListener('change', () => {
        let innerValue = input.valueAsNumber;
        input.defaultValue = innerValue;
        input.setAttribute('value', innerValue);

    });
};
export default inputNumber;
