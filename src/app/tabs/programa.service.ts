import { Injectable, OnInit } from '@angular/core';
import { Programa} from './programa.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService implements OnInit {
  private _programa: Programa = {
    imgURL: 'https://picsum.photos/504/200',
    name: 'Que Venha o Povo'
  };
  constructor() { }
  ngOnInit(){
    
  }
  get programa(){
    return this._programa;
  }
}
