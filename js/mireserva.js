document.addEventListener("DOMContentLoaded", () => {

    const reserva = JSON.parse(localStorage.getItem("reserva"));

    if(!reserva) return;

    document.getElementById("nombreCliente").textContent =
        `¡Hola de nuevo, ${reserva.nombre}!`;

    document.getElementById("reservaLocalizador").textContent =
        reserva.localizador;

    document.getElementById("hotelReserva").textContent =
        reserva.hotel;

    document.getElementById("fechaLlegada").textContent =
        reserva.fechaEntrada;

    document.getElementById("fechaSalida").textContent =
        reserva.fechaSalida;

document.addEventListener("DOMContentLoaded", ()=>{

    const cliente = JSON.parse(localStorage.getItem("cliente"));

    if(!cliente){
        window.location.href = "checkin.html";
        return;
    }

    document.getElementById("localizadorReserva").textContent = cliente.localizador;
    document.getElementById("fechaLlegada").textContent = cliente.fechaEntrada;

});

});
