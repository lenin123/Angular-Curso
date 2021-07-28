import * as fromPessoaActions from './pessoa.actions'
import { Pessoa } from './../models/pessoa';
import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface PessoasState extends EntityState<Pessoa> {}

export const pessoaAdapter: EntityAdapter<Pessoa> = createEntityAdapter<Pessoa>({
    selectId: (p: Pessoa) => p.id != undefined ? p.id : ''
});

export const initialState: PessoasState = pessoaAdapter.getInitialState({});

export function reducer(state = initialState, action: Action){
    const pessoaAction = action as fromPessoaActions.PessoaActions; 

    switch (pessoaAction.type) {
        case fromPessoaActions.PessoaActionTypes.PESSOAS_ALL:
            return state;
        case fromPessoaActions.PessoaActionTypes.PESSOA_NOVA:
            return pessoaAdapter.addOne(pessoaAction.payload.pessoa, state);
        case fromPessoaActions.PessoaActionTypes.PESSOA_ATUALIZAR:
            return pessoaAdapter.updateOne({id: pessoaAction.payload.id, changes: pessoaAction.payload.changes}, state);
        case fromPessoaActions.PessoaActionTypes.PESSOA_DELETAR:
            return pessoaAdapter.removeOne(pessoaAction.payload.id, state);
        default:
            return state;
    }
}