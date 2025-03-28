// Configuración de gráficos
const cryptoCharts = {
    btc: { element: 'btc-chart', symbol: 'bitcoin' },
    eth: { element: 'eth-chart', symbol: 'ethereum' },
    // Agregar otras monedas
};

Object.values(cryptoCharts).forEach(config => {
    const ctx = document.getElementById(config.element);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1D', '1W', '1M', '1Y'],
            datasets: [{
                label: 'Precio USD',
                data: [30000, 32000, 31000, 40000], // Datos de ejemplo
                borderColor: '#00ff88',
            }]
        }
    });
});
