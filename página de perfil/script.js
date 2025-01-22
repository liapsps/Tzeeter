// Função para alternar o tema
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Adicionar evento ao botão de alternar tema
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', toggleTheme);
});