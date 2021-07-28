import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pessoa } from './models/pessoa';
import * as faker from 'faker';
import { AppState, selectPessoas } from './store';
import { select, Store } from '@ngrx/store';
import { PessoaNova, PessoasAll, PessoaAtualizar, PessoaDeletar } from './store/pessoa.actions';
import * as fromPessoaSelectors from './store/pessoa.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  unsubscribeTodos: Subject<any> = new Subject();
  pessoas$: Observable<Pessoa[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.pessoas$ = new Observable<Pessoa[]>();
  }

  ngOnInit(): void {
    this.store.dispatch(new PessoasAll());
    // this.pessoas$ = this.store.pipe(
                                    // select('pessoa'),
                                    // takeUntil(this.unsubscribeTodos));
    this.pessoas$ = this.store.select(fromPessoaSelectors.selectAll).pipe(takeUntil(this.unsubscribeTodos));
  }

  addNovaPessoa() {
    let pessoa: Pessoa = {
      nome: faker.name.findName(),
      endereco: faker.address.streetAddress(),
      cidade: faker.address.city(),
      estado: faker.address.country(),
      idade: Math.round(Math.random() * 100),
      id: new Date().getMilliseconds().toString()
    }
    this.store.dispatch(new PessoaNova({ pessoa }));
  }

  atualizarPessoa(p: Pessoa) {  

    let pessoaAtualiza: Pessoa = {
      nome: faker.name.findName(),
      endereco: faker.address.streetAddress(),
      cidade: faker.address.city(),
      estado: faker.address.country(),
      idade: Math.round(Math.random() * 100),
      id: p.id
    }
    p = pessoaAtualiza;
    this.store.dispatch(new PessoaAtualizar({ id: p.id != undefined ? p.id : '', changes: p }));
  }

  deletarPessoa(p: Pessoa) {
    let idPessoa = p.id == undefined ? '' : p.id;
    this.store.dispatch(new PessoaDeletar({ id: idPessoa}));
  }

  ngOnDestroy(): void {
    this.unsubscribeTodos.next();
  }

}
