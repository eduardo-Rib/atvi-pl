import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let cont = 0;
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(++cont)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Pets` + cliente.getPets)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}