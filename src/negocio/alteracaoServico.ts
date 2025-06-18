import Alteracao from "./alteracao";
import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import ListagemServicos from "./listagemServicos";

export default class AlteracaoServico extends Alteracao {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public alterar(): void {
        console.log("\nEdição de Serviços:");
        new ListagemServicos(this.servicos).listar()
        let indice = this.entrada.receberNumero("Informe o índice do serviço que quer editar: ");
        if (indice >= 0 && indice < this.servicos.length) {
            let nome = this.entrada.receberTexto("Informe o nome atualizado: ");
            let descricao = this.entrada.receberTexto("Informe a descrição atualizada: ");
            let preco = this.entrada.receberNumero("Informe o valor atualizado: ");
            this.servicos[indice].nome = nome;
            this.servicos[indice].descricao = descricao;
            this.servicos[indice].preco = preco;
            console.log("Dados do serviço atualizado com sucesso!");
        } else {
            console.log("Índice inválido.");
        }
    }
}