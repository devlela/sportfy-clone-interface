function togglePlay() {
    const button = document.querySelector('.play-button');
    const isPlaying = button.innerText.includes("Pause");
    button.innerText = isPlaying ? "▶️ Play" : "⏸️ Pause";
    button.setAttribute('aria-label', isPlaying ? "Tocar música" : "Pausar música");
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
