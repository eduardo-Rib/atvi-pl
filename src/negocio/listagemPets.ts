import Listagem from "./listagem";
import Cliente from "../modelo/cliente";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {
        console.log("\nListagem de Pets:");
        for (let i = 0; i < this.clientes.length; i++) {
            const cliente = this.clientes[i];
            if (cliente.getPets.length > 0) {
                console.log(`\nDono: ${cliente.nome} (${cliente.nomeSocial}) - CPF: ${cliente.getCpf}`);

                for (let j = 0; j < cliente.getPets.length; j++) {
                    const pet = cliente.getPets[j];
                    console.log(` Pet ${j + 1}:
   Nome: ${pet.getNome}
   Raça: ${pet.getRaca}
   Gênero: ${pet.getGenero}
   Tipo: ${pet.getTipo}\n`);
                }
            }
        }
    }
}