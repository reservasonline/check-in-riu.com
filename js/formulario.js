document.addEventListener("DOMContentLoaded", () => {

   
    // ==========================
    // DROPDOWN IDIOMA
    // ==========================
    const langToggle = document.querySelector(".lang-toggle");
    const langMenu = document.querySelector(".lang-menu");

    if (langToggle && langMenu) {
        langToggle.addEventListener("click", function (e) {
            e.preventDefault();
            langMenu.classList.toggle("show");
        });
    }

    // ==========================
    // ELEMENTOS
    // ==========================
    const btnSiguiente = document.getElementById("btnSiguiente");
    const inputsReserva = document.querySelectorAll("#form-datos-reserva input");
    const inputsSinLoc = document.querySelectorAll("#form-sin-localizador input");
    const todosLosInputs = document.querySelectorAll(".checkin-form-box input");
    

     // ==========================
    // BLOQUEAR FECHAS PASADAS
    // ==========================
    const campoFecha = document.getElementById("fecha");

    if (campoFecha) {

        const hoy = new Date();
        hoy.setMinutes(hoy.getMinutes() - hoy.getTimezoneOffset());

        campoFecha.min = hoy.toISOString().split("T")[0];

    }
    // ==========================
    // VALIDACIÓN
    // ==========================
    function validarFormulario() {

        let completo = true;

        const reservaActiva = document
            .getElementById("tab-reserva")
            .classList.contains("active");

        if (reservaActiva) {

            inputsReserva.forEach(input => {
                if (input.value.trim() === "") completo = false;
            });

        } else {

            inputsSinLoc.forEach(input => {
                if (input.value.trim() === "") completo = false;
            });

        }

        btnSiguiente.disabled = !completo;
        btnSiguiente.classList.toggle("activo", completo);

    }

    todosLosInputs.forEach(input => {
        input.addEventListener("input", validarFormulario);
    });

    // ==========================
    // CAMBIAR PESTAÑAS
    // ==========================
    window.cambiarPestana = function(opcion){

        const tabReserva = document.getElementById("tab-reserva");
        const tabSinLoc = document.getElementById("tab-sin-loc");

        const formReserva = document.getElementById("form-datos-reserva");
        const formSinLoc = document.getElementById("form-sin-localizador");

        if(opcion==="reserva"){

            tabReserva.classList.add("active");
            tabReserva.classList.remove("inactive");

            tabSinLoc.classList.remove("active");
            tabSinLoc.classList.add("inactive");

            formReserva.style.display="block";
            formSinLoc.style.display="none";

        }else{

            tabSinLoc.classList.add("active");
            tabSinLoc.classList.remove("inactive");

            tabReserva.classList.remove("active");
            tabReserva.classList.add("inactive");

            formReserva.style.display="none";
            formSinLoc.style.display="block";

        }

        validarFormulario();

    }

    // ==========================
    // HOTEL
    // ==========================
    const heroImage = document.getElementById("heroImage");
    const hotelName = document.getElementById("hotelName");

    const imagen = localStorage.getItem("hotelImagen");
    const nombre = localStorage.getItem("hotelNombre");

    if(imagen && heroImage) heroImage.src = imagen;
    if(nombre && hotelName) hotelName.textContent = nombre;

    // ==========================
    // MODAL
    // ==========================
    const linkMisReservas = document.getElementById("linkMisReservas");
    const linkRiuClass = document.getElementById("linkRiuClass");
    const loginModal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");
    const togglePassword = document.getElementById("togglePassword");
    const inputPassword = document.getElementById("loginPassword");

    function abrirModal(e){

        e.preventDefault();
        loginModal.style.display="flex";

    }

    if(linkMisReservas) linkMisReservas.addEventListener("click", abrirModal);
    if(linkRiuClass) linkRiuClass.addEventListener("click", abrirModal);

    if(closeModal){

        closeModal.addEventListener("click", ()=>{

            loginModal.style.display="none";

        });

    }

    window.addEventListener("click",(e)=>{

        if(e.target===loginModal){

            loginModal.style.display="none";

        }

    });

    if(togglePassword){

        togglePassword.addEventListener("click",()=>{

            inputPassword.type =
                inputPassword.type==="password" ? "text" : "password";

        });

    }

    // ==========================
    // DATOS DEL CLIENTE
    // ==========================
    const cliente = {

        email: "fredyjosem@gmail.com",
        localizador: "WRC4OMRR",
        fechaEntrada: "2026-07-26"

    };

    // ==========================
    // BOTÓN SIGUIENTE
    // ==========================
    btnSiguiente.addEventListener("click",function(e){

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const localizador = document.getElementById("localizador").value.trim();
        const fecha = document.getElementById("fecha").value;

        if(
            email===cliente.email &&
            localizador===cliente.localizador &&
            fecha===cliente.fechaEntrada
        ){

            localStorage.setItem("cliente",JSON.stringify(cliente));

            window.location.href = "mireserva.html";

        }else{

            alert("Los datos de la reserva son incorrectos.");

        }

    });

    validarFormulario();

});