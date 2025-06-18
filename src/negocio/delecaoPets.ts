import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Delecao from "./delecao";
import ListagemPets from "./listagemPets";
import ListagemClientes from "./listagemClientes";

export default class DelecaoPets extends Delecao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public delecao(): void {
        console.log(`\nInício da deleção de Pet`);

        new ListagemClientes(this.clientes).listar();

        let indiceCliente = this.entrada.receberNumero("Informe o número do cliente: ");
        indiceCliente -= 1;

        if (indiceCliente >= 0 && indiceCliente < this.clientes.length) {
            let cliente = this.clientes[indiceCliente];
            let pets = cliente.getPets;

            if (pets.length > 0) {
                
                new ListagemPets(this.clientes).listar();

                let indicePet = this.entrada.receberNumero("Informe o número do pet que quer excluir: ");
                indicePet -= 1;

                if (indicePet >= 0 && indicePet < pets.length) {
                    let removido = pets.splice(indicePet, 1);
                    console.log(`Pet ${removido[0].getNome} removido com sucesso!`);
                } else {
                    console.log("Índice de pet inválido.");
                }
            } else {
                console.log("Este cliente não possui pets.");
            }
        } else {
            console.log("Índice de cliente inválido.");
        }
    }
}