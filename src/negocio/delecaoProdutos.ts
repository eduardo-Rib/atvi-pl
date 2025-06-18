import Entrada from "../io/entrada"
import Delecao from "./delecao"
import Produto from "../modelo/produto"
import ListagemProdutos from "./listagemProdutos"

export default class DelecaoProdutos extends Delecao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produtos = produto
        this.entrada = new Entrada()
    }

    public delecao(): void {
        console.log(`\nInício da deleção do produto`);
        new ListagemProdutos(this.produtos).listar();
        let indice = this.entrada.receberNumero(`Por favor informe o numero do produto: `)
        indice -= 1 
        if (indice >= 0 && indice < this.produtos.length) {
            const produtoRemovido = this.produtos.splice(indice, 1);
            console.log(`Produto "${produtoRemovido[0].nome}" removido com sucesso!`);
        } else {
            console.log("Índice inválido. Nenhum produto foi removido.");
        }
    }
}