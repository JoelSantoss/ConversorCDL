async function converter() {
    const valor = document.getElementById('valor').value;
    const tipoMoeda = document.getElementById('moeda').value;
    const resultado = document.getElementById('resultado');

    if (!valor || valor <= 0) {
        resultado.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json();
        const cotacao = parseFloat(data.USDBRL.bid);

        let valorConvertido;
        if (tipoMoeda === 'BRL') {
            valorConvertido = (valor / cotacao).toFixed(2);
            resultado.textContent = `R$ ${valor} equivale a $ ${valorConvertido} USD.`;
        } else {
            valorConvertido = (valor * cotacao).toFixed(2);
            resultado.textContent = `$ ${valor} equivale a R$ ${valorConvertido} BRL.`;
        }
    } catch (error) {
        resultado.textContent = 'Erro ao obter a cotação. Tente novamente mais tarde.';
    }
}
