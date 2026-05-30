const startButton = document.getElementById("start-button");

if (startButton) 

    startButton.addEventListener("click", () => {

        window.location.href = "question.html";

    });

const correctButton = document.querySelector(".correct");


if (correctButton) {

    correctButton.addEventListener("click", () => {

        const confetti = document.createElement("div");
        confetti.id = "confetti";
        document.body.appendChild(confetti);

        for (let i = 0; i < 60; i++) {

            const piece = document.createElement("span");

            piece.innerHTML =
                ["🎉", "✨", "💖", "💜"][Math.floor(Math.random() * 4)];

            piece.style.position = "fixed";
            piece.style.left = Math.random() * 100 + "vw";
piece.style.top = "-20px";

            piece.style.fontSize =
                (20 + Math.random() * 20) + "px";

            piece.style.animation =
                `fall ${2 + Math.random() * 2}s linear forwards`;

            confetti.appendChild(piece);
        }

        setTimeout(() => {
            confetti.remove();
        }, 4000);

        setTimeout(() => {
            window.location.href = "choice.html";
        }, 1800);

    });

}


const wrongButtons = document.querySelectorAll(".wrong");
const hintText = document.getElementById("hint-text");

const hints = [
    "😌 Хорошая идея, но я задумал кое-что другое...",
    "👀 Почти угадала, но нет...",
    "✨ Это было бы интересно, но есть вариант получше."
];

wrongButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.9)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

        const randomHint =
            hints[Math.floor(Math.random() * hints.length)];

        hintText.textContent = randomHint;

    });

});
const restaurantButton = document.getElementById("restaurant-button");

if (restaurantButton) {

    restaurantButton.addEventListener("click", () => {

        window.location.href = "mj2.html";

    });

}

const noButton = document.getElementById("no-button");

if (noButton) {

    let moveX = 0;

    noButton.addEventListener("mouseover", () => {

        moveX = moveX === 0 ? 120 : 0;

        noButton.style.transform = `translateX(${moveX}px)`;

    });

}
const mjYesButton = document.getElementById("mj-yes-button");

if (mjYesButton) {

    mjYesButton.addEventListener("click", () => {

        window.location.href = "requirements.html";

    });

}
const restaurantChoices = document.querySelectorAll(".restaurant-choice");
const restaurantResult = document.getElementById("restaurant-result");

restaurantChoices.forEach(button => {

    button.addEventListener("click", () => {

        const restaurantName = button.dataset.name;
        window.open(
`https://docs.google.com/forms/d/e/1FAIpQLSdtkyYBiDRqYRiLy6HFoIh641ZnxlXUz4E36kciEs0DXl1XAw/viewform?usp=pp_url&entry.1395006012=${encodeURIComponent(restaurantName)}`,
"_blank"
);

        localStorage.setItem("restaurantChoice", restaurantName);

        restaurantResult.textContent =
            `✨ Отличный выбор! Тогда идем в ${restaurantName}`;

        setTimeout(() => {

            window.location.href = "restaurant.html";

        }, 1800);

    });

});
const restaurantNameElement =
    document.getElementById("restaurant-name");

if (restaurantNameElement) {

    const savedRestaurant =
        localStorage.getItem("restaurantChoice");

    if (savedRestaurant) {

        restaurantNameElement.textContent =
            savedRestaurant;

    }

}
const secretButton = document.getElementById("secret-button");

if (secretButton) {

    secretButton.addEventListener("click", () => {

        window.location.href = "movie.html";

    });

}
const requirementsButton =
    document.getElementById("requirements-button");

if (requirementsButton) {

    requirementsButton.addEventListener("click", () => {

        window.location.href = "requirements.html";

    });

}
const movieButton = document.getElementById("movie-button");

if (movieButton) {

    let attempts = 0;

    movieButton.addEventListener("click", () => {

        const answer = document
            .getElementById("movie-answer")
            .value
            .trim()
            .toLowerCase();

        const message = document.getElementById("movie-message");

        if (
            answer === "волк с уолл стрит" ||
            answer === "волк с уолл-стрит"
        ) {

            window.location.href = "secret.html";

        } else {

            attempts++;

            if (attempts === 1) {
                message.textContent =
                    "🐺 Подумай ещё... Этот фильм я пересматривал много раз 😏";
            }

            else if (attempts === 2) {
                message.textContent =
                    "🎭 Подсказка: в главной роли Леонардо ДиКаприо";
            }

            else {
                message.textContent =
                    "📈 Последняя подсказка: Уолл-стрит";
            }

            movieButton.disabled = true;
            let hintText = message.textContent;

            let seconds = 180;

            const timer = setInterval(() => {

                message.textContent =
                    `${hintText} | Следующая попытка через ${seconds} сек`;

                seconds--;

                if (seconds < 0) {

                    clearInterval(timer);

                    movieButton.disabled = false;

                    message.textContent =
                        "✅ Можешь попробовать снова";

                }

            }, 1000);
        }
    });
}
const finishButton = document.getElementById("finish-button");

if (finishButton) {

    finishButton.addEventListener("click", () => {

        window.location.href = "finish.html";

    });

}
const countdown = document.getElementById("countdown");

if (countdown) {

    function updateCountdown() {

        const now = new Date();

        const friday = new Date("2026-06-05T20:00:00");
        const diff = friday - now;

        const days = Math.floor(diff / 86400000);

        const hours = Math.floor(
            (diff % 86400000) / 3600000
        );

        const minutes = Math.floor(
            (diff % 3600000) / 60000
        );

        countdown.textContent =
            `⏳ До нашей встречи осталось: ${days} д. ${hours} ч. ${minutes} мин.`;
    }

    updateCountdown();

    setInterval(updateCountdown, 60000);
}
const hearts = document.getElementById("hearts");

if (hearts) {

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.textContent = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 1000);
}

window.addEventListener("load", () => {

    const typingText = document.getElementById("typing-text");

    if (!typingText) return;

    const chars = [...typingText.textContent];

    typingText.textContent = "";

    let index = 0;

    function typeLetter() {

        if (index < chars.length) {

    typingText.textContent += chars[index];

    index++;

    setTimeout(typeLetter, 70);

} else {

    const button =
        document.getElementById("start-button");

    if (button) {

        button.classList.add("show");
    }
}
    }

    typeLetter();

});
