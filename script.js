let lado1 = parseInt(prompt('Digite o valor do primeiro lado'))
let lado2 = parseInt(prompt('Digite o valor do segundo lado'))
let lado3 = parseInt(prompt('Digite o valor do terceiro lado'))

if(lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado3 + lado2 > lado1){
    document.write('Isto é um triângulo')
    if(lado1==lado2 && lado1==lado3 && lado2==lado3){
        document.write("<br>")
        document.write('Isto é um Triângulo Equilátero')
    }
    if(lado1==lado2 && lado2!==lado3 || lado1==lado3 && lado3!==lado2 || lado2==lado3 && lado3!==lado1){
        document.write("<br>")
        document.write('Isto é um Triângulo Isósceles')
    }
    if(lado1 !== lado2 && lado1!==lado3 && lado2!==lado3){
        document.write("<br>")
        document.write('Isto é um Triângulo Escaleno')
    }


}else{
    document.write('Isso não é um triângulo')
}