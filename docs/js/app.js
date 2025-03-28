// Inicialización de componentes
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    loadCryptoData();
    loadVideos();
});

// Datos iniciales para tablas
const categories = {
    defi: 'decentralized-finance-defi',
    memecoin: 'meme-token',
    depin: 'depin',
    nfts: 'non-fungible-tokens-nft',
    layer2: 'layer-2'
};

// Cargar datos de API
async function loadCryptoData() {
    for (const [category, id] of Object.entries(categories)) {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${id}`);
        const data = await response.json();
        renderTable(category, data);
    }
}

// Renderizar tablas
function renderTable(category, data) {
    const container = document.getElementById(`${category}-table`);
    let html = `<table><tr><th>Proyecto</th><th>Precio</th><th>Market Cap</th></tr>`;
    
    data.slice(0, 10).forEach(coin => {
        html += `
            <tr>
                <td><img src="${coin.image}" width="20"> ${coin.name}</td>
                <td>$${coin.current_price}</td>
                <td>$${coin.market_cap.toLocaleString()}</td>
            </tr>
        `;
    });
    
    container.innerHTML = html + '</table>';
}
function loadVideos() {
    const videos = [
        { id: 'vS3_72Gb-bI', title: 'Qué es Bitcoin' },
        { id: 'Hqz1YQ5V4Rk', title: 'Introducción a DeFi' }
    ];
    
    const container = document.getElementById('video-container');
    videos.forEach(video => {
        container.innerHTML += `
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/${video.id}" 
                title="${video.title}" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        `;
    });
}
