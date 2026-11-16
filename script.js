const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    cookiesEnabled: navigator.cookieEnabled,
    online: navigator.onLine
};

localStorage.setItem(
    "systemInfo",
    JSON.stringify(systemInfo)
);

console.log("Інформацію збережено:", systemInfo);

const savedInfo = JSON.parse(
    localStorage.getItem("systemInfo")
);

const systemInfoElement = document.getElementById("system-info");

if (savedInfo && systemInfoElement) {
    systemInfoElement.innerHTML = `
        <h3>Інформація про систему</h3>
        <p>Браузер: ${savedInfo.userAgent}</p>
        <p>Платформа: ${savedInfo.platform}</p>
        <p>Мова: ${savedInfo.language}</p>
        <p>Мови браузера: ${savedInfo.languages.join(", ")}</p>
        <p>Cookies: ${savedInfo.cookiesEnabled ? "Увімкнені" : "Вимкнені"}</p>
        <p>Мережа: ${savedInfo.online ? "Онлайн" : "Офлайн"}</p>
    `;
}
async function loadReviews() {
    const container = document.getElementById("reviews-container");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/18/comments"
        );

        if (!response.ok) {
            throw new Error("Помилка завантаження");
        }

        const reviews = await response.json();

        container.innerHTML = "";

        reviews.forEach(review => {
            const reviewElement = document.createElement("div");

            const name = document.createElement("h3");
            name.textContent = review.name;

            const email = document.createElement("p");
            email.textContent = review.email;

            const message = document.createElement("p");
            message.textContent = review.body;

            reviewElement.append(name, email, message);
            container.appendChild(reviewElement);
        });

    } catch (error) {
        container.textContent = "Не вдалося завантажити відгуки.";
        console.error(error);
    }
}

loadReviews();

const modal = document.getElementById("contact-modal");
const closeModal = document.getElementById("close-modal");

// Відкриття форми через 60 секунд
setTimeout(() => {
    modal.style.display = "flex";
}, 60000);

// Закриття форми кнопкою
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
const themeToggle = document.getElementById("theme-toggle");

// Автоматичний вибір теми за часом
function setAutomaticTheme() {
    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 21) {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
}

// Встановлюємо тему при завантаженні
setAutomaticTheme();

// Ручне перемикання теми
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});