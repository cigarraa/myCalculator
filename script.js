function adicionar(valor){
    document.getElementById("visor").value += valor;
}

function calcular(){
    let visor = document.getElementById("visor");
    visor.value = eval(visor.value);
}

function limpar(){
    document.getElementById("visor").value = "";
}