import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("\nCadastro de Serviço:");
        const nome = this.entrada.receberTexto("Nome do serviço: ");
        const descricao = this.entrada.receberTexto("Descrição do serviço: ");
        const preco = this.entrada.receberNumero("Preço do serviço (R$): ");

        const servico = new Servico(nome, descricao, preco);
        this.servicos.push(servico);
        console.log("Serviço cadastrado com sucesso!\n");
    }
}
