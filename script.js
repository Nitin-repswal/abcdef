const messages = [
    "Wait, are you sure? 😢",
    "Think again... 🥺",
    "What if I buy you chocolates? 🍫",
    "I’ll be heartbroken... 💔",
    "Please don’t break my heart 😭",
    "You're making me sad... 😞",
    "Last chance to change your mind! 🤞",
    "Okay, I give up... (not really) 😜",
    "You're so stubborn! 😤",
    "Fine, I still love you anyway! ❤️",
    "Alright, this is the last time I'm asking...",
    "Wait... the 'No' button is disappearing! 😳",
    "Oops, looks like you have no choice now! 😆"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
    }

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Hide the "No" button after the last message
    if (messageIndex >= messages.length) {
        noButton.style.display = "none";
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
