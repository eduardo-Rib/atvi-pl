import { ClientRequest } from "http";
import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Cliente from "../modelo/cliente";
import ListagemClientes from "./listagemClientes";
import Pet from "../modelo/pet";

export default class CadastroPets extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("\nCadastro de Pets:");
        const nome = this.entrada.receberTexto("Nome do pet: ");
        const tipo = this.entrada.receberTexto("Tipo do pet: ");
        const raca = this.entrada.receberTexto("Raça do pet: ");
        const genero = this.entrada.receberTexto("Genero do pet: ");
        let pet = new Pet(nome, raca, genero, tipo);

        new ListagemClientes(this.clientes).listar();
        let indice = this.entrada.receberNumero(`Por favor informe o numero do cliente: `)
        indice -= 1
        if (indice >= 0 && indice < this.clientes.length) {
            let clienteSelecionado = this.clientes[indice];
            clienteSelecionado.setPet(pet); 
            console.log("Pet cadastrado e vinculado ao cliente com sucesso!\n");
        } else {
            console.log("Índice inválido. Pet não foi vinculado.\n");
        }
    }
}