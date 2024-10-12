// Dados para o gráfico de linhas
var dadosLinhas = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'Receitas',
        data: [50, 30, 40, 70, 45],
        borderColor: '#e8542c'
    }]
};

// Configurações do gráfico de linhas
var configLinhas = {
    type: 'line',
    data: dadosLinhas
};

// Criar o gráfico de linhas
var graficoLinhas = new Chart(document.getElementById('linha'), configLinhas);



