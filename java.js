function add_param(param){
document.querySelector("[name='tela']").value += param
}

function calcular(){
    conta = document.querySelector("[name='tela']").value
    document.querySelector("[name='tela']").value = eval(conta)
    
}

function porcentagem(){
    conta = document.querySelector("[name='tela']").value + '/100'
    document.querySelector("[name='tela']").value = eval(conta)
    
}

function AC(){
    document.querySelector("[name='tela']").value = ''
}