import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import RegistroConsumo from "../negocio/registroConsumo";
import Top10ClientesQuantidade from "../negocio/top10ClientesQuantidade";
import Top5ClientesValor from "../negocio/top5ClientesValor";
import ListagemMaisConsumidos from "../negocio/listagemMaisConsumidos";
import DelecaoCliente from "../negocio/delecaoCliente";
import Cliente from "../modelo/cliente";
import CadastroPets from "../negocio/cadastroPets";
import Produto from "../modelo/produto";
import ListagemProdutos from "../negocio/listagemProdutos";
import DelecaoProdutos from "../negocio/delecaoProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import DelecaoServicos from "../negocio/delecaoServicos";
import AlteracaoCliente from "../negocio/alteracaoClientes";
import AlteracaoProduto from "../negocio/alteracaoProduto";
import AlteracaoServico from "../negocio/alteracaoServico";
import ListagemPets from "../negocio/listagemPets";
import AlteracaoPets from "../negocio/alteracaoPets";
import DelecaoPets from "../negocio/delecaoPets";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);
let empresa = new Empresa();
let execucao = true;

// Inclusao de clientes, pets, produtos e serviços - Feito
// consulta de clientes, pets, produtos e serviços
// Exclusão de clientes, pets, produtos e serviços
// Edição de clientes, pets, produtos e serviços


while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`3 - Produtos`);
    console.log(`4 - Serviços`);
    console.log(`5 - Registrar consumo de cliente`);
    console.log(`6 - Listar top 10 clientes por quantidade de consumo`);
    console.log(`7 - Listar top 5 clientes por valor de consumo`);
    console.log(`8 - Listar produtos e serviços mais consumidos`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            let opc = `clientes`
            let crud = CRUD<Cliente>("cliente", empresa.getClientes);
            switch (crud){
                case 1:
                    new CadastroCliente(empresa.getClientes).cadastrar();
                    break;
                case 2:
                    new ListagemClientes(empresa.getClientes).listar();
                    break
                case 3:
                    new AlteracaoCliente(empresa.getClientes).alterar();
                    break
                case 4:
                    new DelecaoCliente(empresa.getClientes).delecao();
                    break
                case -1:
                    console.log(`Para listar, alterar ao deletar ${opc} é necessário ter ao menos um cadastrado`);
                default:
                    console.log(`Operação cancelada :(`);
            }
        case 2:
            opc = `Pets`
            crud = CRUD<Cliente>("cliente", empresa.getClientes);
            switch (crud){
                case 1:
                    new CadastroPets(empresa.getClientes).cadastrar();
                    break;
                case 2:
                    new ListagemPets(empresa.getClientes).listar();
                    break
                case 3:
                    new AlteracaoPets(empresa.getClientes).alterar();
                    break
                case 4:
                    new DelecaoPets(empresa.getClientes).delecao();
                    break
                case -1:
                    console.log(`Para listar, alterar ao deletar ${opc} é necessário ter ao menos um cadastrado`);
                default:
                    console.log(`Operação cancelada :(`);
            }
        case 3:
            opc = `produtos`
            crud = CRUD<Produto>("cliente", empresa.getProdutos);
            switch (crud){
                case 1:
                    new CadastroProduto(empresa.getProdutos).cadastrar();
                    break;
                case 2:
                    new ListagemProdutos(empresa.getProdutos).listar();
                    break
                case 3:
                    new AlteracaoProduto(empresa.getProdutos).alterar();
                    break
                case 4:
                    new DelecaoProdutos(empresa.getProdutos).delecao();
                    break
                case -1:
                    console.log(`Para listar, alterar ao deletar ${opc} é necessário ter ao menos um cadastrado`);
                default:
                    console.log(`Operação cancelada :(`);
            }
        case 4:
            opc = `serviços`
            crud = CRUD<Produto>("serviço", empresa.getProdutos);
            switch (crud){
                case 1:
                    new CadastroServico(empresa.getServicos).cadastrar();
                    break;
                case 2:
                    new ListagemServicos(empresa.getServicos).listar();
                    break
                case 3:
                    new AlteracaoServico(empresa.getServicos).alterar();
                    break
                case 4:
                    new DelecaoServicos(empresa.getServicos).delecao();
                    break
                case -1:
                    console.log(`Para listar, alterar ao deletar ${opc} é necessário ter ao menos um cadastrado`);
                default:
                    console.log(`Operação cancelada :(`);
            }
        case 5:
            new RegistroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos).registrar();
            break;
        case 6:
            new Top10ClientesQuantidade(empresa.getClientes).listar();
            break;
        case 7:
            new Top5ClientesValor(empresa.getClientes).listar();
            break;
        case 8:
            new ListagemMaisConsumidos(empresa.getClientes).listar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais!`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}


function CRUD<T>(opc: string, array: Array<T>): number {
    let operacao;
    do {
        console.log(`\nOpções:`);
        console.log(`1 - Inserir ${opc}`);
        console.log(`2 - Listar ${opc}`);
        console.log(`3 - Alterar ${opc}`);
        console.log(`4 - Deletar ${opc}`);
        console.log(`0 - Cancelar operação`);
        let entrada = new Entrada();
        operacao = entrada.receberNumero(`\nPor favor, escolha uma opção: `);
    } while (operacao < 0 || operacao > 4);

    if (operacao === 1) {
        return operacao;
    } else if (verifyArray(array)) {
        return -1;
    } else {
        return 0;
    }
}

function verifyArray<T>(array: Array<T>): boolean {
    return array.length != 0;
}