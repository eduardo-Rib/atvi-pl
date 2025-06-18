import Listagem from "./listagem";
import Produto from "../modelo/produto";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar(): void {
        let cont = 0;
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(++cont)
            console.log(`Nome: ` + produto.nome);
            console.log(`Descrição: ` + produto.descricao);
            console.log(`Preço: ` + produto.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}