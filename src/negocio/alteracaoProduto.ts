import Alteracao from "./alteracao";
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import ListagemProdutos from "./listagemProdutos";

export default class AlteracaoProduto extends Alteracao {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public alterar(): void {
        console.log("\nEdição de Produtos:");
        new ListagemProdutos(this.produtos).listar();
        let indice = this.entrada.receberNumero("Informe o índice do produto que quer editar: ");
        if (indice >= 0 && indice < this.produtos.length) {
            let nome = this.entrada.receberTexto("Informe o nome atualizado: ");
            let descricao = this.entrada.receberTexto("Informe a descrição atualizada: ");
            let preco = this.entrada.receberNumero("Informe o valor atualizado: ");
            this.produtos[indice].nome = nome;
            this.produtos[indice].descricao = descricao;
            this.produtos[indice].preco = preco;
            console.log("Dados do produto atualizado com sucesso!");
        } else {
            console.log("Índice inválido.");
        }
    }
}