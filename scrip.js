bt = document.getElementById("bt");
nav_links = document.querySelector(".nav-links");
nav_of = document.querySelector(".nav-of");

bt.onclick = function() {
    nav_links.style.display = "flex";
    nav_of.style.display = "block";
}

nav_of.onclick = function() {
    nav_links.style.display = "none";
    nav_of.style.display = "none";
}


    // Validación de formulario
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

document.addEventListener('DOMContentLoaded', function() {
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formMsg.style.color = 'red';
            formMsg.textContent = '';
            let valid = true;

            if (nombre.value.trim()) {
                formMsg.textContent = 'Por favor, ingresa tu nombre. ';
                valid = false;
            }
            else if (email.value.trim() || !email.checkValidity()) {
                formMsg.textContent = 'Por favor, ingresa un correo válido. ';
                valid = false;
            }
            else if (mensaje.value.trim()) {
                formMsg.textContent = 'Por favor, ingresa tu mensaje. ';
                valid = false;
            }
            
            if (!valid) {
                return;
            }
            fetch(form.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `nombre=${encodeURIComponent(nombre.value)}&email=${encodeURIComponent(email.value)}&mensaje=${encodeURIComponent(mensaje.value)}`
            })
            .then(response => {
                if (response.ok) {
                    formMsg.style.color = 'green';
                    formMsg.textContent = 'Formulario enviado con éxito.';
                    form.reset();
                } else {
                    formMsg.textContent = 'Error al enviar el formulario.';
                }
            })
            .catch(() => {
                formMsg.textContent = 'Error al enviar el formulario.';
            });
        });
    }
});