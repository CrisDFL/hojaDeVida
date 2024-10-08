// Script para el formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe realmente
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulación de envío de mensaje
    alert(`Gracias ${name} por contactarnos! Tu mensaje ha sido enviado.`);
    // Aquí podrías hacer una llamada a una API para enviar el formulario, si lo deseas
    // console.log(name, email, message);
    document.getElementById("contact-form").reset(); // Resetea el formulario
});

