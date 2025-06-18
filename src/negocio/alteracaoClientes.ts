import Alteracao from "./alteracao";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import ListagemClientes from "./listagemClientes";

export default class AlteracaoCliente extends Alteracao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public alterar(): void {
        console.log("\nEdição de Clientes:");
        new ListagemClientes(this.clientes).listar();
        let indice = this.entrada.receberNumero("Informe o índice do cliente que quer editar: ");
        if (indice >= 0 && indice < this.clientes.length) {
            let nome = this.entrada.receberTexto("Informe o nome atualizado: ");
            let nomeSocial = this.entrada.receberTexto("Informe o nome social atualizado: ");
            let valorCpf = this.entrada.receberTexto("Informe o CPF atualizado: ");
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            let cpf = new CPF(valorCpf, dataEmissao);
            this.clientes[indice].atualizarDados(nome, nomeSocial, cpf);
            console.log("Dados do cliente atualizado com sucesso!");
        } else {
            console.log("Índice inválido.");
        }
    }
}