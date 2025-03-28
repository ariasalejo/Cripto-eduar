// Cargar noticias desde API
async function loadNews() {
    try {
        const response = await fetch('https://api.cryptopanic.com/v1/posts/?auth_token=TU_API_KEY');
        const data = await response.json();
        renderNews(data.results);
    } catch (error) {
        console.error("Error al cargar noticias:", error);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    initCharts();
});
