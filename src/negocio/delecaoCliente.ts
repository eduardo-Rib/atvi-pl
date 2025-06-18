import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Delecao from "./delecao"
import ListagemClientes from "./listagemClientes"

export default class DelecaoCliente extends Delecao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public delecao(): void {
        console.log(`\nInício da deleção do cliente`);
        new ListagemClientes(this.clientes).listar();
        let indice = this.entrada.receberNumero(`Por favor informe o numero do cliente: `)
        indice -= 1 
        if (indice >= 0 && indice < this.clientes.length) {
            const clienteRemovido = this.clientes.splice(indice, 1);
            console.log(`Cliente "${clienteRemovido[0].nome}" removido com sucesso!`);
        } else {
            console.log("Índice inválido. Nenhum cliente foi removido.");
        }
    }
}