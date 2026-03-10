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

const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get("id");

const arrayyy = [
    "Уважаемые мама Настя и папа Серёжа",
    "Дорогие Маша и Рома",
    "Дорогая бабушка Лида",
    "Дорогие тётя Лена и дядя Юра",
    "Дорогие Юлия, Виталий и Саша",
    "Дорогие дядя Саша и Света",
    "Дорогая Вика",
    "Дорогая Алина",
    "Уважаемые Александр и Юлия",
    "Дорогая Даша",
    "Дорогие Полина и Ник",
    "Дорогие Светлана и Максим",
    "Уважаемый Егор",
    "Дорогая Настя",
    "Дорогие мама Лена и папа Ваня",
    "Дорогие Петя и Федя",
    "Дорогая бабушка Лена",
    "Дорогой дедушка Валера",
    "Дорогие Максим, Настя и Саша",
    "Дорогая Настя",
    "Уважаемая Марина",
    "Уважаемая Ирина",
    "Уважаемые Алексей, Наталья и Оксана",
    "Дорогие Данила и Дарья",
    "Уважаемый Иван",
    "Уважаемый Матвей",
    "Уважаемые Дмитрий и Александра",
    "Дорогой дядя Денис",
];

if (guestName) {
    const greeting = document.getElementById("greeting-text");
    greeting.textContent = `${arrayyy[guestName]}!`;
}
