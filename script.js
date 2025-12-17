// Preenche a data atual
document.getElementById('dataAtual').innerText = new Date().toLocaleDateString('pt-BR');

const ctx = document.getElementById('rodaVidaChart').getContext('2d');

let dataValues = [5, 5, 5, 5, 5, 5];
const labels = ['Espiritualidade', 'Saúde Física', 'Família', 'Trabalho/Estudo', 'Emoções', 'Lazer'];

const myChart = new Chart(ctx, {
    type: 'polarArea', 
    data: {
        labels: labels,
        datasets: [{
            label: 'Nível',
            data: dataValues,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(255, 206, 86, 0.6)', 
                'rgba(75, 192, 192, 0.6)', 
                'rgba(153, 102, 255, 0.6)', 
                'rgba(255, 159, 64, 0.6)' 
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Permite que o gráfico se ajuste melhor no celular
        layout: {
            padding: 10
        },
        scales: {
            r: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 2,
                    backdropColor: 'transparent',
                    font: {
                        size: 10 // Letras menores no eixo para caber no celular
                    }
                },
                pointLabels: {
                    font: {
                        size: 11, // Rótulos ajustados
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 15,
                    padding: 15,
                    font: {
                        size: 11
                    }
                }
            }
        }
    }
});

function updateChart(index, value) {
    document.getElementById('val' + index).innerText = value;
    myChart.data.datasets[0].data[index] = value;
    myChart.update();
}
