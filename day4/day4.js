var numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
var tentativas = 3;

alert("Vamos brincar de adivinhar!")
alert("Seu desafio é descobrir qual é este número.")

do {
    var answer = prompt(`Digite um número entre 0 e 10. Você tem ${tentativas} tentativas`)

    if(Number(answer) === numeroSecreto) {
        alert("Parabéns! Você acertou!")
    } else if(Number(answer) !== numeroSecreto) {
        alert("Que pena! Você errou!")
        tentativas = tentativas - 1;

        if(tentativas === 0) {
            alert(`Suas tentativas acabaram! O número era ${numeroSecreto}`)
        }

    } else {
        alert("Isto não é um número. Tente outra vez...")
    }

} while (tentativas > 0 && Number(answer) !== numeroSecreto);