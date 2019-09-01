import { Injectable, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit {
  _quizes: Quiz[] = [
    { imgURL: 'https://picsum.photos/300/200', status: true, pergunta: 'VOCÊ QUER CASAR?' },
    { imgURL: 'https://picsum.photos/301/200', status: true, pergunta: 'VOCÊ CURTE ROCK?' },
    { imgURL: 'https://picsum.photos/302/200', status: true, pergunta: 'VOCÊ É JOVEM AINDA?' },
    { imgURL: 'https://picsum.photos/303/200', status: true, pergunta: 'VOCÊ É ADULTO?' },
    { imgURL: 'https://picsum.photos/304/200', status: true, pergunta: 'VOCÊ ESTÁ NA OUTRA EMISSORA?' },
    { imgURL: 'https://picsum.photos/305/200', status: true, pergunta: 'VOCÊ GOSTA DE TRETA?' },
    { imgURL: 'https://picsum.photos/306/200', status: true, pergunta: 'VOCÊ GOSTA DE PRIMEIRA EDIÇÃO?' }
  ]

  get quizes() {
    return [...this._quizes];
  }
  constructor() { }
  ngOnInit() {

  }
}
