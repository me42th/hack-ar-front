import { Injectable, OnInit } from '@angular/core';
import { Programa } from './programa.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService implements OnInit {
  private _programa: Programa = {
    imgURL: 'assets/img/qvp.jpg',
    name: 'Que Venha o Povo',
    id: '2'
  };
  constructor() { }
  ngOnInit() {

  }
  get programa() {
    return this._programa;
  }
}
