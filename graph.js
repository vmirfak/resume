var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Preço por ação ($)',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(22, 158, 40, 1)',
            ],
            borderWidth: 2,
            tension: 0.1,
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
            
        }
    }
});


// Stock API Key:      YSFD1HIJ9HCTPYFM
