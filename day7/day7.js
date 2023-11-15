function menu() {
    alert("1. Soma          \n"
        + "2. Subtracao     \n"
        + "3. Multiplicacao \n"
        + "4. Divisao       \n"
        + "5. Sair          \n")

}
function Soma(a, b) {
    a = Number(a);
    b = Number(b)
    return a + b;
}

function Subtracao(a, b) {
    return a - b;
}

function Multiplicacao(a, b) {
    return a * b;
}

function Divisao(a, b) {
    return a / b;
}

var resultado;
var a, b;
var escolha;
do {

    menu();
    escolha = prompt("O que você deseja fazer?")
    switch (escolha) {
        case "1":
            a = prompt("Digite o primeiro valor:")
            b = prompt("Digite o segundo valor:")
            resultado = Soma(a, b)
            alert(`O resultado é ${resultado}`)
            break;
        case "2":
            a = prompt("Digite o primeiro valor:")
            b = prompt("Digite o segundo valor:")
            resultado = Subtracao(a, b)
            alert(`O resultado é ${resultado}`)
            break;
        case "3":
            a = prompt("Digite o primeiro valor:")
            b = prompt("Digite o segundo valor:")
            resultado = Multiplicacao(a, b)
            alert(`O resultado é ${resultado}`)
            break;
        case "4":
            a = prompt("Digite o primeiro valor:")
            b = prompt("Digite o segundo valor:")
            if (b === "0") {
                do {
                    alert("Não é possivel dividir por zero");
                    b = prompt("Digite o segundo valor:");
                } while (b === "0")
            }

            resultado = Divisao(a, b)
            alert(`O resultado é ${resultado}`)
            break;
        case "5":
            alert("Até logo")
            break;
        default:
            alert("Entrada inválida")
            break;
    }

} while (escolha !== "5")