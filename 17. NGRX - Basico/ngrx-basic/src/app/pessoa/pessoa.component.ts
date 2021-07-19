import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from './../models/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa!: Pessoa;
  @Output() atualizarPessoa: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();
  @Output() deletarPessoa: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();

  constructor() { }

  ngOnInit() {
  }

}
