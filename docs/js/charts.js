// Archivo charts.js
const ctx = document.getElementById('cryptoChart').getContext('2d');
const cryptoChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'], // Ejemplo de etiquetas de meses
        datasets: [{
            label: 'Precio Bitcoin (USD)',
            data: [40000, 42000, 43000, 39000, 45000], // Ejemplo de datos
            backgroundColor: 'rgba(0, 255, 136, 0.2)',
            borderColor: '#00ff88',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff' // Texto blanco para tema oscuro
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#ffffff' }
            },
            y: {
                ticks: { color: '#ffffff' }
            }
        }
    }
});
