import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class RegistroConsumo {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public registrar(): void {
        console.log("\nRegistro de consumo de produtos e serviços:");
        const nomeCliente = this.entrada.receberTexto("Nome do cliente: ");
        const cliente = this.clientes.find(c => c.nome === nomeCliente);

        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }

        let opcao = 0;
        do {
            console.log("1 - Adicionar produto\n2 - Adicionar serviço\n0 - Finalizar");
            opcao = this.entrada.receberNumero("Escolha uma opção: ");

            switch (opcao) {
                case 1:
                    this.produtos.forEach((p, i) => console.log(`${i + 1} - ${p.nome} (R$${p.preco})`));
                    const prodIdx = this.entrada.receberNumero("Escolha o número do produto: ") - 1;
                    const produto = this.produtos[prodIdx];
                    if (produto) cliente.adicionarProduto(produto);
                    break;
                case 2:
                    this.servicos.forEach((s, i) => console.log(`${i + 1} - ${s.nome} (R$${s.preco})`));
                    const servIdx = this.entrada.receberNumero("Escolha o número do serviço: ") - 1;
                    const servico = this.servicos[servIdx];
                    if (servico) cliente.adicionarServico(servico);
                    break;
                case 0:
                    console.log("Registro de consumo finalizado.\n");
                    break;
                default:
                    console.log("Opção inválida.\n");
            }
        } while (opcao !== 0);
    }
}
