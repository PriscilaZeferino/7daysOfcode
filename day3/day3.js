var answer;
var lang = [];

do {
    answer = prompt("Você quer seguir para área de Front-end ou para área de Back-end? Digite 1 para Front-End e 2 para Back-End");

    if (answer === "1") {
        answer = prompt("Aprender React ou Vue? Digite 1 para React e 2 para Vue");
    } else if (answer === "2") {
        answer = prompt("Aprender C# ou Java? Digite 1 para C# e 2 para Java");
    } else {
        alert("Resposta inválida");
    }
} while (answer !== "1" && answer !== "2");


do {
    answer = prompt("1. Seguir se especializando na área escolhida ou 2.Seguir se desenvolvendo para se tornar Fullstack.");

    if (answer === "1") {
        alert("Ótima escolha! Se especializar na área é uma ótima abordagem");
    } else if (answer === "2") {
        alert("Ótima escolha! Se tornar fullstack é uma ótima abordagem");
    } else {
        alert("Resposta inválida");
    }
} while (answer !== "1" && answer !== "2");


answer = prompt("Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer?");
alert(`Aprender ${answer} é uma ótima ideia`);
lang.push(answer);

do {
    answer = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite OK para encerrar")
    if (answer !== "OK") {
        alert(`Aprender ${answer} é uma ótima ideia`);
        lang.push(answer)
    }
} while (answer !== "OK");

var message = "Lista de aprendizado: \n"
lang.forEach(function (item) {
    message += item + "\n";
});

alert(message)
