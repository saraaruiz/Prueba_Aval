// Interacción de botones de categorías
const buttons = document.querySelectorAll('.category-buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Validación del newsletter
const subscribeBtn = document.querySelector('.btn-subscribe');
const emailInput = document.querySelector('.footer-newsletter input');

subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email === '' || !email.includes('@')) {
        alert('Por favor, ingresa un correo válido');
    } else {
        alert('¡Gracias por suscribirte!');
        emailInput.value = '';
    }
});