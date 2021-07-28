import { Action } from "@ngrx/store";
import { Pessoa } from './../models/pessoa';

export enum PessoaActionTypes {
    PESSOAS_ALL = '[PESSOAS_ALL] Get de todas as pessoas',
    PESSOA_NOVA = '[PESSOA_NOVA] Adicionar nova pessoa',
    PESSOA_ATUALIZAR = '[PESSOA_ATUALIZAR] Atualizar uma pessoa',
    PESSOA_DELETAR = '[PESSOA_DELETAR] Deletar uma pessoa'
}

export class PessoasAll implements Action {
    readonly type = PessoaActionTypes.PESSOAS_ALL;
}

export class PessoaNova implements Action {
    readonly type = PessoaActionTypes.PESSOA_NOVA;
    constructor(public payload: { pessoa: Pessoa }) {}
}

export class PessoaAtualizar implements Action {
    readonly type = PessoaActionTypes.PESSOA_ATUALIZAR;
    constructor(public payload: { id: string, changes: Partial<Pessoa> }) {}
}

export class PessoaDeletar implements Action {
    readonly type = PessoaActionTypes.PESSOA_DELETAR;
    constructor(public payload: { id: string }) {}
}

export type PessoaActions =  PessoasAll | PessoaNova | PessoaAtualizar | PessoaDeletar;