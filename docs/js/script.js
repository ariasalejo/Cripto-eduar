document.addEventListener('DOMContentLoaded', () => {
    // Mostrar contenido de README.md en la sección "Inicio"
    fetch('README.md')
        .then(response => response.text())
        .then(data => {
            document.getElementById('readme-content').innerHTML = `<pre>${data}</pre>`;
        });

    // API para obtener proyectos DeFi
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('tables-container');
            const table = document.createElement('table');
            table.innerHTML = '<tr><th>Nombre</th><th>Precio</th><th>Market Cap</th><th>Cambio (%)</th></tr>';
            data.forEach(coin => {
                table.innerHTML += `<tr>
                    <td>${coin.name}</td>
                    <td>$${coin.current_price}</td>
                    <td>$${coin.market_cap.toLocaleString()}</td>
                    <td>${coin.price_change_percentage_24h.toFixed(2)}%</td>
                </tr>`;
            });
            container.appendChild(table);
        });

    // Videos embebidos de YouTube
    const videoGrid = document.querySelector('.video-grid');
    const videos = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3'];
    videos.forEach(videoId => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = '560';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        videoGrid.appendChild(iframe);
    });
});
