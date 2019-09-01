import { Injectable, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit {
  _quizes: Quiz[] = [
    { id: 'p1', imgURL: 'https://picsum.photos/300/200', status: true, pergunta: 'VOCÊ QUER CASAR?', value: 20 },
    { id: 'p2', imgURL: 'https://picsum.photos/301/200', status: true, pergunta: 'VOCÊ CURTE ROCK?', value: 40 },
    { id: 'p3', imgURL: 'https://picsum.photos/302/200', status: true, pergunta: 'VOCÊ É JOVEM AINDA?', value: 30 },
    { id: 'p4', imgURL: 'https://picsum.photos/303/200', status: true, pergunta: 'VOCÊ É ADULTO?', value: 20 },
    { id: 'p5', imgURL: 'https://picsum.photos/304/200', status: true, pergunta: 'VOCÊ ESTÁ NA OUTRA EMISSORA?', value: 15 },
    { id: 'p6', imgURL: 'https://picsum.photos/305/200', status: true, pergunta: 'VOCÊ GOSTA DE TRETA?', value: 30 },
    { id: 'p7', imgURL: 'https://picsum.photos/306/200', status: true, pergunta: 'VOCÊ GOSTA DE PRIMEIRA EDIÇÃO?', value: 50 }
  ]

  get quizes() {
    return [...this._quizes];
  }
  constructor() { }
  ngOnInit() {

  }
}
