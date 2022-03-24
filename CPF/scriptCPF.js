function clicar() {
    let regiao = parseInt(window.document.getElementById("regiao").value);
    if (regiao == 10) { regiao = 0};
    if (regiao != 10 && regiao != 9 && regiao != 8 && regiao != 7 && regiao != 6 && regiao != 5 && regiao != 4 && regiao != 3 && regiao != 2 && regiao != 1 && regiao != 0) {
        regiao = Math.floor(Math.random() * 10);
    }
    // console.log("a regiao selecionada é: ", regiao);

    /*
    1.ª: DF, GO, MT, MS e TO;
    2.ª: AC, AP, AM, PA, RO e RR;
    3.ª: CE, MA e PI;
    4.ª: AL, PB, PE e RN;
    5.ª: BA e SE;
    6.ª: MG;
    7.ª: ES e RJ;
    8.ª: SP;
    9.ª: PR e SC;
    10.ª: RS.
    */

    let array1 = primeirosOitoNumeros();

    while (regiao == array1[0] && regiao == array1[1] && regiao == array1[2] && regiao == array1[3] && regiao == array1[4] && regiao == array1[5] && regiao == array1[6] && regiao == array1[7]) {
        let array1 = primeirosOitoNumeros();
    };

    array1.push(regiao);
    // console.log("array1 : ", array1);

    let dig1 = calcDig1(array1);

    let array2 = [...array1];
    array2.push(dig1);

    // console.log("array2 = ", array2);

    let dig2 = calcDig2(array2);

    let array3 = [...array2];
    array3.push(dig2);
    
    CPF = array3.join("");

    document.querySelector("#cpf").innerHTML = "CPF : " + CPF + " região: " + regiao;
    // console.log("CPF : ", CPF);
};

function primeirosOitoNumeros() {
    let array1 = []
    for (let i = 0; i<8; i++) {
        let item = parseInt(Math.random()*10);
        array1.push(item);
    };
    return array1;
};



function calcDig1(arr) {
    // console.log("CALC DIGITO 1:");
    let array1 = [10,9,8,7,6,5,4,3,2];
    let array2 = arr;
    let array3 = [];
    let soma = 0;

    for (i=0; i<9; i++) {
        array3.push(array1[i]*array2[i]);
        soma += (array3[i]);
    };

    // console.log("array3 = ", array3);
    // console.log("soma = ", soma);

    let resDiv = parseInt(soma%11);
    // console.log("resDiv = ", resDiv);

    let dig1;
    if (resDiv < 2) {
        dig1 = 0;
    } else {
        dig1 = 11-resDiv;
    };
    // console.log("dig1 = ", dig1);
    
    return dig1;
};

function calcDig2 (arr) {
    // console.log("CALC DIGITO 2:");
    let array1 = [11,10,9,8,7,6,5,4,3,2];
    let array2 = arr;
    let array3 = [];
    let soma = 0;

    for (i=0; i<10; i++) {
        array3.push(array1[i]*array2[i]);
        soma += (array3[i]);
    };

    // console.log("array3 = ", array3);
    // console.log("soma = ", soma);

    let resDiv = parseInt(soma%11);
    // console.log("resDiv = ", resDiv);

    let dig2;
    if (resDiv < 2) {
        dig2 = 0;
    } else {
        dig2 = 11-resDiv;
    };
    // console.log("dig2 = ", dig2);
    
    return dig2;
};