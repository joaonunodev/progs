var jogador = null;

var jogadorSelecionado = document.getElementById("jogador-selecionado");

var quadrado = document.getElementsByClassName(quadrado);

var vencedor = null;

var quadrado1 = document.getElementById(1);
var quadrado2 = document.getElementById(2);
var quadrado3 = document.getElementById(3);
var quadrado4 = document.getElementById(4);
var quadrado5 = document.getElementById(5);
var quadrado6 = document.getElementById(6);
var quadrado7 = document.getElementById(7);
var quadrado8 = document.getElementById(8);
var quadrado9 = document.getElementById(9);

var vitoriasX = 0;
var derrotasX = 0;
var empatesX = 0;
var vitoriasO = 0;
var derrotasO = 0;
var empatesO = 0;


mudarJogador("X");

function reiniciar() {
    console.log("Clicou em Reiniciar")
    mudarJogador("X");
    document.getElementById("vencedor-selecionado").innerHTML = "";
    vencedor = null;
    quadrado1.innerHTML = "-";
    quadrado1.style.color = "#c8d1ce";
    quadrado2.innerHTML = "-";
    quadrado2.style.color = "#c8d1ce";
    quadrado3.innerHTML = "-";
    quadrado3.style.color = "#c8d1ce";
    quadrado4.innerHTML= "-";
    quadrado4.style.color = "#c8d1ce";
    quadrado5.innerHTML = "-";
    quadrado5.style.color = "#c8d1ce";
    quadrado6.innerHTML = "-";
    quadrado6.style.color = "#c8d1ce";
    quadrado7.innerHTML = "-";
    quadrado7.style.color = "#c8d1ce";
    quadrado8.innerHTML = "-";
    quadrado8.style.color = "#c8d1ce";
    quadrado9.innerHTML = "-";
    quadrado9.style.color = "#c8d1ce";
}

function escolherQuadrado(id) {
    console.log("Clicou no quadrado " + id);
    var quadradoSel = document.getElementById(id);

    if (quadradoSel.innerHTML != "-" || vencedor != null) {
        return
    } else {
        quadradoSel.innerHTML = jogador;
        quadradoSel.style.color = "#000";
        checarEmpate();
        checarVencedor(jogador);

        if (jogador == "X") valor = "O";
        else valor = "X";

        mudarJogador(valor);
    }
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = valor;
}

function checarEmpate() {
    var q1 = quadrado1.innerHTML;
    var q2 = quadrado2.innerHTML;
    var q3 = quadrado3.innerHTML;
    var q4 = quadrado4.innerHTML;
    var q5 = quadrado5.innerHTML;
    var q6 = quadrado6.innerHTML;
    var q7 = quadrado7.innerHTML;
    var q8 = quadrado8.innerHTML;
    var q9 = quadrado9.innerHTML;
    if (q1 != "-" && q2 != "-" && q3 != "-" && q4 != "-"  && q5 != "-"  && q6 != "-"  && q7 != "-"  && q8 != "-"  && q9 != "-") {
        document.getElementById("vencedor-selecionado").innerHTML = "Empate!";
        empatesO += 1;
        empatesX += 1;
        document.getElementById("jogadorX-empates").innerHTML = empatesX;
        document.getElementById("jogadorO-empates").innerHTML = empatesO;
    }
}

function checarVencedor(jogador) {
    var q1 = quadrado1.innerHTML;
    var q2 = quadrado2.innerHTML;
    var q3 = quadrado3.innerHTML;
    var q4 = quadrado4.innerHTML;
    var q5 = quadrado5.innerHTML;
    var q6 = quadrado6.innerHTML;
    var q7 = quadrado7.innerHTML;
    var q8 = quadrado8.innerHTML;
    var q9 = quadrado9.innerHTML;

    if ((q1 != "-" && q1 == q2 && q1 == q3) ||
    (q4 != "-" && q4 == q5 && q4 == q6) ||
    (q7 != "-" && q7 == q8 && q7 == q9) ||
    (q1 != "-" && q1 == q4 && q1 == q7) ||
    (q2 != "-" && q2 == q5 && q2 == q8) ||
    (q3 != "-" && q3 == q6 && q3 == q9) ||
    (q1 != "-" && q1 == q5 && q1 == q9) ||
    (q3 != "-" && q3 == q5 && q3 == q7))
    {
        console.log("Venceu!");
        vencedor = jogador;
        document.getElementById("vencedor-selecionado").innerHTML = "O jogador " + jogador + " venceu!"
        
        if (jogador == "X") {
            vitoriasX += 1;
            derrotasO += 1;
        } else {
            vitoriasO += 1;
            derrotasX += 1;
        }

        document.getElementById("jogadorX-vitorias").innerHTML = vitoriasX;
        document.getElementById("jogadorO-vitorias").innerHTML = vitoriasO;
        document.getElementById("jogadorX-derrotas").innerHTML = derrotasX;
        document.getElementById("jogadorO-derrotas").innerHTML = derrotasO;
    }

}