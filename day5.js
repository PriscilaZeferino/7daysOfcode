var listaDeCompras = [];

var frutas = []
var laticínios = []
var congelados = []
var doces = []

var addComida;
var item;
var tipo;
do {

    addComida = prompt("Você deseja adicionar algum item a sua lista de compras? Responda com 'sim' ou 'não'")

    if (addComida !== 'sim' && addComida !== 'não') {
        alert("Resposta inválida. Tente novamente")
    }

    if (addComida === 'sim') {

        item = prompt("Qual comida você deseja inserir?")
        listaDeCompras.push(item)

        tipo = prompt("Categorias \n frutas \n laticínios \n congelados \n doces\n Em qual categoria essa comida se encaixa?")
        if (tipo === 'frutas') {
            frutas.push(item)
        }
        else if (tipo === 'laticínios') {
            laticínios.push(item)
        }
        else if (tipo === 'congelados') {
            congelados.push(item)
        }
        else if (tipo === 'doces') {
            doces.push(item)
        } else {
            alert("Categoria nao encontrada")
        }

    }

} while (addComida !== "não")

alert(`Lista de compras \n frutas: ${frutas} \n laticínios: ${laticínios} \n congelados: ${congelados} \n doces: ${doces}`)