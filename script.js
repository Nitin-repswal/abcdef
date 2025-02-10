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
    "Fine, I still love you anyway! ❤️"
];


let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
