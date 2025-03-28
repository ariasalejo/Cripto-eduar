async function loadNews() {
    const response = await fetch('https://api.cryptopanic.com/v1/posts/?auth_token=TU_API_KEY');
    const news = await response.json();
    // Renderizar noticias en tu diseño
}
