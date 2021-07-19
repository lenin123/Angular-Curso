import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pessoas$: Observable<Pessoa[]>;

  constructor() {
    this.pessoas$ = new Observable<Pessoa[]>();
  }

  addNovaPessoa() {

  }

  atualizarPessoa(p: Pessoa) {

  }

  deletarPessoa(p: Pessoa) {

  }

}
