function surpreenda() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = ""; 

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Converte o nome do dado para minúsculas para facilitar a comparação
        let nome = dado.name.toLowerCase();

        // Verifica se o termo de pesquisa está presente no nome do dado
        // A condição permite pesquisas parciais e ignora espaços em branco
        if (!campoPesquisa.trim() || nome.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <section>
                <div class="container">
                <div class="left">
                    <img class="poster" src="${dado.poster}" alt="">
                    <div class="info">
                        <p>${dado.type}</p>
                        <p>${dado.adaptacion}</p>
                        <p>${dado.episodes}</p>
                    </div>
                    <a class="btn-primary" href="${dado.info}" target="_blank">Mais informações</a>
                </div>
                <div class="right">
                    <h2 class="title">${dado.name}</h2>
                    <h3 class="subtitle">Sinopse:</h3>
                    <p class="sinopse">
                        ${dado.sinopse}
                    </p>
                    <div class="trailer">
                        <strong>Trailer</strong>
                        <a class="thumbnail" href="${dado.trailer}" target="_blank">
                            <img src="${dado.thumbnail}" alt="">
                        </a>
                    </div>
                </div>
                </div>
                </section>
            `;
        }
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p class='warning'>Nada foi encontrado. Você precisa digitar o nome do Donghua</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}