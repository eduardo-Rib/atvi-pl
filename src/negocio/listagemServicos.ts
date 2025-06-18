import Listagem from "./listagem";
import Servico from "../modelo/servico";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        let cont = 0;
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servico => {
            console.log(++cont)
            console.log(`Nome: ` + servico.nome);
            console.log(`Descrição: ` + servico.descricao);
            console.log(`Preço: ` + servico.preco);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}