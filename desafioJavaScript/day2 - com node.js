const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
};

(async () => {
    const nome = await question('Qual é o seu nome? ');
    const idade = await question('Quantos anos você tem? ');
    const linguagemDeProgramacao = await question('Qual linguagem de programação você está estudando? ');

    console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramacao}!`);

    const resposta = await question(`Você gosta de estudar ${linguagemDeProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`)
    if(resposta == 1) {
        console.log("Muito bom! Continue estudando e você terá muito sucesso.")
    } else if(resposta == 2) {
        console.log("Ahh que pena... Já tentou aprender outras linguagens?")
    } else {
        console.log("Resposta inválida")
    }

    rl.close();
})();

// rl.question('Qual o seu nome? ', (name) => {
//     nome = name;
//     rl.question('Quantos anos você tem? ', (age) => {
//         idade = age;
//         rl.question('Qual o seu nome? ', (lang) => {
//             linguagemDeProgramacao = lang;
//             rl.question('Você gosta de estudar ' + linguagemDeProgramacao + '? Responda com o número 1 para SIM ou 2 para NÃO.', (resp) => {
//                 if(resp == 1) {
//                     console.log("1 > Muito bom! Continue estudando e você terá muito sucesso.")
//                 } else if (resp == 2) {
//                     console.log("Ahh que pena... Já tentou aprender outras linguagens?")
//                 }
//             })
//         });
//     });
// });





// console.log("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagemDeProgramacao);