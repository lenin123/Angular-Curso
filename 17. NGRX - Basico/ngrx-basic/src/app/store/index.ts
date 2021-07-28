import { Pessoa } from './../models/pessoa';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPessoaReducer from './person.reducer';

export interface AppState {
    pessoa: fromPessoaReducer.PessoasState;
}

export const appReducers : ActionReducerMap<AppState> = {
    pessoa: fromPessoaReducer.reducer
}

export const selectPessoas = (state: AppState) => state.pessoa;