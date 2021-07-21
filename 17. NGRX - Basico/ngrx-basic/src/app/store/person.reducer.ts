import * as fromPessoaActions from './pessoa.actions'
import { Pessoa } from './../models/pessoa';
import { Action } from '@ngrx/store';

export const initialState: Pessoa[] = [];

export function reducer(state = initialState, action: Action){
    const pessoaAction = action as fromPessoaActions.PessoaActions; 

    switch (pessoaAction.type) {
        case fromPessoaActions.PessoaActionTypes.PESSOAS_ALL:
            return state;
        case fromPessoaActions.PessoaActionTypes.PESSOA_NOVA:
            return state.concat([pessoaAction.payload.pessoa]);
        case fromPessoaActions.PessoaActionTypes.PESSOA_ATUALIZAR:
            let pessoa = state.slice();
            let i = pessoa.findIndex(p => p.id == pessoaAction.payload.pessoa.id);
            if(i >= 0){
                pessoa[i] = pessoaAction.payload.pessoa;
            }
            return pessoa;                
        case fromPessoaActions.PessoaActionTypes.PESSOA_DELETAR:
            return state.filter(p => p.id != pessoaAction.payload.id);            
        default:
            return state;
    }
}