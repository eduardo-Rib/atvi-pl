import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class Top5ClientesValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const clientesOrdenados = this.clientes.slice().sort((a, b) => {
            const valorA = a.getProdutosConsumidos.reduce((s, p) => s + p.preco, 0) +
                           a.getServicosConsumidos.reduce((s, s1) => s + s1.preco, 0);
            const valorB = b.getProdutosConsumidos.reduce((s, p) => s + p.preco, 0) +
                           b.getServicosConsumidos.reduce((s, s1) => s + s1.preco, 0);
            return valorB - valorA;
        });

        console.log("\nTop 5 clientes por valor gasto:");
        clientesOrdenados.slice(0, 5).forEach((cliente, i) => {
            const total = cliente.getProdutosConsumidos.reduce((s, p) => s + p.preco, 0) +
                          cliente.getServicosConsumidos.reduce((s, s1) => s + s1.preco, 0);
            console.log(`${i + 1}. ${cliente.nome} - R$ ${total.toFixed(2)}`);
        });
        console.log();
    }
}
