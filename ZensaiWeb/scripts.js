/* ---- ANIMACIÓN DEL MENÚ DESPLEGABLE ---- */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navParts = document.querySelectorAll('.nav-part');

    menuToggle.addEventListener('click', function() {
        navParts.forEach(part => part.classList.toggle('active'));
    });
});

/* ---- TEXTO CIRCULAR ---- */

const texts = document.querySelectorAll('.text');
texts.forEach(text => {
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    
    const spans = text.querySelectorAll('span');
    for (let i = 1; i < spans.length; i++) {
        spans[i].style.transform = "rotate(" + i * 20+ "deg)";
    }
});

/*------------------------------ VALIDACIÓN DEL REGISTRO ------------------------------- */

document.querySelector('.form-register').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío automático para validar primero

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.querySelector('input[name="terms"]').checked;

    if (username === "") {
        alert("El nombre de usuario es obligatorio.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Introduce un correo electrónico válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!terms) {
        alert("Debes aceptar los términos y condiciones.");
        return;
    }

    alert("¡Formulario de registro enviado correctamente!");
    this.submit(); // Envía el formulario si pasa todas las validaciones
});


/*----- VALIDACIÓN DEL INICIO DE SESIÓN ----- */

document.querySelector('.form-login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert("Introduce un correo electrónico válido.");
        return;
    }

    if (password === "") {
        alert("La contraseña es obligatoria.");
        return;
    }

    alert("¡Inicio de sesión exitoso!");
    this.submit(); 
});

// Función para validar formato de correo electrónico
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

//ANIMACIÓN LIKE-HEART

function toggleLike(element) {
    element.classList.toggle("liked");
}




