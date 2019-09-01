import { Injectable, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit{
  _quizes: Quiz[] = [
    {programa: 'QUE VENHA O POVO', pergunta: 'VOCÊ QUER CASAR?'},
    {programa: 'UNIVERSO AXÉ', pergunta: 'VOCÊ CURTE ROCK?'},
    {programa: 'BOM DIA E CIA', pergunta: 'VOCÊ É JOVEM AINDA?'},
    {programa: 'SABADO ANIMADO', pergunta: 'VOCÊ É ADULTO?'},
    {programa: 'BAHIA NOTICIA', pergunta: 'VOCÊ ESTÁ NA OUTRA EMISSORA?'},
    {programa: 'ARATU NO AR', pergunta: 'VOCÊ GOSTA DE TRETA?'},
    {programa: 'ARATU NOTICIA', pergunta: 'VOCÊ GOSTA DE PRIMEIRA EDIÇÃO?'}
  ]

  get quizes(){
    return [...this._quizes];
  }
  constructor() { }
  ngOnInit(){
    
  }
}
