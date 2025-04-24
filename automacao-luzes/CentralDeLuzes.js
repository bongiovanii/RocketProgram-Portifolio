
class CentralDeLuzes {
    static instance;
    constructor() {
        if (CentralDeLuzes.instance) {
            return CentralDeLuzes.instance;
        }
        CentralDeLuzes.instance = this;
        this.luz = false;
    }

    getLuz() {
        // console.log(`Luz: ${this.luz}`);
        return this.luz;
    }

    ligar(comodo) {
        this.luz = true;
        alert(`Luz do comodo ${comodo} ligada`);
        console.log(`Luz do comodo ${comodo} ligada`);
    }

    desligar(comodo) {
        this.luz = false;
        alert(`Luz do comodo ${comodo} desligada`);
        console.log(`Luz do comodo ${comodo} desligada`);
    }
}

const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {
    botao.addEventListener("click", function () {
        const idBotao = this.id;
        ligarDesligarLuzes(this.id);
    });
})

function ligarDesligarLuzes(id) {
    const botao = document.getElementById(id);
    const comodo = botao.getAttribute('data-comodo');
    const luz = new CentralDeLuzes();

    const status = luz.getLuz();

    status === false ? luz.ligar(comodo) : luz.desligar(comodo);

}



