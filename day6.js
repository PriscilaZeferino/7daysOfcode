var listaDeCompras = [];

var frutas = []
var laticínios = []
var congelados = []
var doces = []

var menu;
var remComida;
var addComida;
var item;
var pos;
var tipo;

do {
    alert("1. Adicionar items a lista de compras \n"
        + "2. Remover items da lista de compras  \n"
        + "3. Visualizar lista de compras        \n"
        + "4. Encerrar compra                    \n")
    menu = prompt("O que você deseja fazer?")

    switch (menu) {
        case "1":
            do {
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

                addComida = prompt("Deseja adicionar mais comida? 'sim' ou 'nao'")

            } while (addComida === "sim")

            break;
        case "2":
            if (listaDeCompras.length >= 1) {
                do {
                    alert(`Lista de compras \n frutas: ${frutas} \n laticínios: ${laticínios} \n congelados: ${congelados} \n doces: ${doces}`)
                    item = prompt("Qual comida você deseja remover?")
                    if (listaDeCompras.includes(item)) {
                        pos = listaDeCompras.indexOf(item)
                        listaDeCompras.splice(pos, 1)

                        if (frutas.includes(item)) {
                            pos = frutas.indexOf(item)
                            frutas.splice(pos, 1)
                        }
                        else if (laticínios.includes(item)) {
                            pos = laticínios.indexOf(item)
                            laticínios.splice(pos, 1)
                        }
                        else if (congelados.includes(item)) {
                            pos = congelados.indexOf(item)
                            congelados.splice(pos, 1)
                        }
                        else if (doces.includes(item)) {
                            pos = doces.indexOf(item)
                            doces.splice(pos, 1)
                        }
                        alert("Comida removida")
                    }

                    if (listaDeCompras.length >= 1) {
                        remComida = prompt("Deseja remover mais alguma comida? 'sim' ou 'nao'")
                    }

                } while (remComida === "sim")
            } else {
                alert("Não há elementos na lista de compras")
            }
            break;
        case "3":
            alert(`Lista de compras \n frutas: ${frutas} \n laticínios: ${laticínios} \n congelados: ${congelados} \n doces: ${doces}`)
            break;
        case "4":
            break;
        default:
            alert("Entrada invaldia")
            break;
    }
} while (menu !== "4")




