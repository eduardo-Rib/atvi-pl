import Entrada from "../io/entrada"
import Delecao from "./delecao"
import Servico from "../modelo/servico"
import ListagemServicos from "./listagemServicos"

export default class DelecaoServicos extends Delecao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }

    public delecao(): void {
        console.log(`\nInício da deleção do servico`);
        new ListagemServicos(this.servicos).listar();
        let indice = this.entrada.receberNumero(`Por favor informe o numero do servico: `)
        indice -= 1 
        if (indice >= 0 && indice < this.servicos.length) {
            const servicoRemovido = this.servicos.splice(indice, 1);
            console.log(`servico "${servicoRemovido[0].nome}" removido com sucesso!`);
        } else {
            console.log("Índice inválido. Nenhum servico foi removido.");
        }
    }
}