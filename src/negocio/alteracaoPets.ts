import Alteracao from "./alteracao";
import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Cliente from "../modelo/cliente";
import ListagemPets from "./listagemPets";
import ListagemClientes from "./listagemClientes";

export default class AlteracaoPets extends Alteracao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
  
    public alterar(): void {
        console.log(`\nInício da alteração de Pet`);

        new ListagemClientes(this.clientes).listar();

        let indiceCliente = this.entrada.receberNumero("Informe o número do cliente: ");
        indiceCliente -= 1;

        if (indiceCliente >= 0 && indiceCliente < this.clientes.length) {
            let cliente = this.clientes[indiceCliente];
            let pets = cliente.getPets;

            if (pets.length > 0) {

                new ListagemPets(this.clientes).listar();

                let indicePet = this.entrada.receberNumero("Informe o número do pet que quer alterar: ");
                indicePet -= 1;

                if (indicePet >= 0 && indicePet < pets.length) {
                    let pet = pets[indicePet];
                    let nome = this.entrada.receberTexto("Informe o nome atualizado: ");
                    let raca = this.entrada.receberTexto("Informe a nova raça: ");
                    let genero = this.entrada.receberTexto("Informe o novo gênero: ");
                    let tipo = this.entrada.receberTexto("Informe o novo tipo: ");
                    pet["nome"] = nome;
                    pet["raca"] = raca;
                    pet["genero"] = genero;
                    pet["tipo"] = tipo;

                    console.log("Dados do pet atualizado com sucesso!");
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