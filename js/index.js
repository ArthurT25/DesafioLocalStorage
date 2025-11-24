const input = document.getElementById('inputText');
const btn = document.getElementById('buttonText');

btn.addEventListener('click', () => {
    const valor = input.value;
    localStorage.setItem('miDato', valor);
    input.value = '';
})