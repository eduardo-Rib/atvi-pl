import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class Top10ClientesQuantidade extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const clientesOrdenados = this.clientes.slice().sort((a, b) => {
            const totalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            const totalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return totalB - totalA;
        });

        console.log("\nTop 10 clientes por quantidade de consumo:");
        clientesOrdenados.slice(0, 10).forEach((cliente, i) => {
            const total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            console.log(`${i + 1}. ${cliente.nome} - ${total} itens consumidos`);
        });
        console.log();
    }
}
