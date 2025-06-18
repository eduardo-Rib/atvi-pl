export default class Servico {
    private _nome: string;
    private _descricao: string;
    private _preco: number;

    constructor(nome: string, descricao: string, preco: number) {
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(descricao: string) {
        this._descricao = descricao;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }
}