// Countdown Timer
const weddingDate = new Date("2026-06-06T16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
        .toString()
        .padStart(2, "0");
    document.getElementById("hours").textContent = hours
        .toString()
        .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Персонализация обращения
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get("name");

if (guestName) {
    const greeting = document.getElementById("greeting-text");
    // Склоняем имя (просто добавляем окончание)
    greeting.textContent = `${guestName}!`;
}
