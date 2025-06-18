import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const contagem: Map<string, number> = new Map();

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(prod => {
                contagem.set(prod.nome, (contagem.get(prod.nome) || 0) + 1);
            });
            cliente.getServicosConsumidos.forEach(serv => {
                contagem.set(serv.nome, (contagem.get(serv.nome) || 0) + 1);
            });
        });

        const ordenado = Array.from(contagem.entries()).sort((a, b) => b[1] - a[1]);

        console.log("\nItens mais consumidos:");
        ordenado.forEach(([nome, qtd], i) => {
            console.log(`${i + 1}. ${nome} - ${qtd} vezes`);
        });
        console.log();
    }
}
