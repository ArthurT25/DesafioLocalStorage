const span = document.getElementById('data');

const valorGuardado = localStorage.getItem('miDato');

span.textContent = valorGuardado || 'no hay datos guardados.';