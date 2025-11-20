// 1. Configura la fecha de TU boda aquí (Año, Mes (0-11), Día, Hora, Minuto)
// Ojo: Los meses en JS van de 0 (Enero) a 11 (Diciembre).
// Ejemplo: 20 de Noviembre de 2025 a las 18:00
const fechaBoda = new Date(2026, 0, 24, 13 , 0, 0).getTime();

// 2. Función que actualiza el contador
const x = setInterval(function() {

    // Obtener fecha y hora actual
    const ahora = new Date().getTime();

    // Encontrar la distancia entre ahora y la fecha de la boda
    const distancia = fechaBoda - ahora;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Agregamos un cero a la izquierda si es menor a 10 (estética)
    const d = dias < 10 ? "0" + dias : dias;
    const h = horas < 10 ? "0" + horas : horas;
    const m = minutos < 10 ? "0" + minutos : minutos;
    const s = segundos < 10 ? "0" + segundos : segundos;

    // 3. Inyectar el resultado en el HTML
    // Usamos spans para poder darle estilo diferente a los números vs texto
    const htmlString = `
        <div class="time-box"><span class="number">${d}</span> <span class="label">DÍAS</span></div>
        <div class="time-box"><span class="number">${h}</span> <span class="label">HRS</span></div>
        <div class="time-box"><span class="number">${m}</span> <span class="label">MIN</span></div>
        <div class="time-box"><span class="number">${s}</span> <span class="label">SEG</span></div>
    `;

    document.getElementById("countdown").innerHTML = htmlString;

    // 4. Si la cuenta regresiva termina
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<div class='final-msg'>¡YA ES HOY! ¡CORRE! 🏃‍♂️💨</div>";
    }

}, 1000);

// Lógica para el menú de celular
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Al hacer clic en el icono hamburguesa
mobileMenu.addEventListener('click', () => {
    // Toggle (quita o pone) la clase 'active'
    navLinks.classList.toggle('active');
});

// Opcional: Cerrar el menú cuando haces clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});