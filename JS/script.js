let jogadores = document.querySelectorAll(".Jogador")

jogadores.forEach((jogadores) => {
    jogadores.addEventListener("mouseenter", () => {

        if (window.innerWidth < 450) {
            window.scroll({top: 0, behavior: "smooth"});
        }
    
        let selecionado = document.querySelector(".Escolhido");
        selecionado.classList.remove("Escolhido");

        jogadores.classList.add('Escolhido');

        let idJogador = jogadores.attributes.id.value;

        let picGrande = document.querySelector(".Foto-Grande");

        picGrande.src = `./imagens/${idJogador}.bola.jpg`;

        let nome = document.getElementById("Nome-Jogador")

        nome.innerText = jogadores.getAttribute("data-name");

        let descricao = document.getElementById("Descricao-Jogador");

        descricao.innerText = jogadores.getAttribute("data-description");
    })


})