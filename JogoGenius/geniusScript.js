let n = 1
let m = 0
let ordemCores = []
let ordemSelecao = []

const azul = document.querySelector('.blue')
const vermelho = document.querySelector('.red')
const verde = document.querySelector('.green')
const amarelo = document.querySelector('.yellow')


window.alert("Vamos iniciar o Jogo nível " + n +".")


//algoritmo do jogo
function jogar() {

    verde.onclick = () => click(0);
    vermelho.onclick = () => click(1);
    amarelo.onclick = () => click(2);
    azul.onclick = () => click(3);

    ordemCores = randomCores(n)

    // mostrar as cores selecionadas aleatoriamente
    for (i = 0; i < n; i++) {
        temp = (i+1) * 1000
        let cor = ordemCores[i]

        setTimeout(() => {
            mostrarCores(cor)
        }, temp);
    }

    setTimeout(() => {
        window.alert("Selecione as cores.")
    }, (temp+1000));

    // cria lista de cores selecionadas pelo usuário
    let click = (cor) => {
        m += 1
        ordemSelecao.push(cor)
        mostrarCores(cor)


        setTimeout(() => {
            if (m >= n) {
                if (compararCores(ordemCores, ordemSelecao) == true) {
                    proximoNivel()
                } else {
                    fimDoJogo()
                }
            } 
        }, (temp));
    }
}

// Comparar as listas de cores randomizada e selecionada
let compararCores = (a, b) => {
    const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i])
    return equals(a, b)
}

// Passar ao próximo nível do Jogo
let proximoNivel = () => {
    n += 1
    window.alert(`GANHOU!!!\nVamos para o nível ${n}!`)
    m = 0
    ordemCores = []
    ordemSelecao = []
    jogar()
}

// Fim de jogo
let fimDoJogo = () => {
    window.alert("ERROU!\nFim do Jogo!")
    n = 1
    m = 0
    ordemCores = []
    ordemSelecao = []
    window.alert("Vamos reiniciar o Jogo nível " + n +".")
    jogar()
}

// Randomizar cores
let randomCores = (n) => {
    let listaCores = []
    
    for (let i = 1; i <= n; i++) {
        let cor = Math.floor(Math.random()*4)
        listaCores.push(cor)
    }
    return listaCores
}

// Exibir cores randomizadas e selecionadas
let mostrarCores = (elemento) => {
    let cor = createColorElement(elemento)
    let mostra = window.document.querySelector('div.'+cor)
    mostra.style.opacity = 1

    setTimeout(() => {
        mostra.style.opacity = 0.3
    }, 500);

}

// Devolver a cor
let createColorElement = (color) => {
    switch (color) {
        case 0:
            return 'green'
            break;
        case 1:
            return 'red'
            break;
        case 2:
            return 'yellow'
            break;
        case 3:
            return 'blue'
            break;
        default:
            break;
    }
}


jogar()