import * as fromPessoaReducer from './person.reducer';
import { createFeatureSelector } from '@ngrx/store';


export const pessoaState = createFeatureSelector<fromPessoaReducer.PessoasState>('pessoa');

export const {
    selectIds,
    selectAll,
    selectEntities,
    selectTotal
} = fromPessoaReducer.pessoaAdapter.getSelectors(pessoaState);