import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { AuthService } from '../../auth/auth.service';
import { ProgramaService } from '../programa.service';
import { User } from '../../auth/user.model';
import { Quiz } from './quiz.model';
import { Programa } from '../programa.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  
  loadedQuizes: Quiz[];
  loggedUser: User;
  programaAtual: Programa;
  next(){
    
    this.loadedQuizes = this.quizSRV.quizes;
  }
  constructor(
    private quizSRV: QuizService,
    private authSRV: AuthService,
    private programaSRV: ProgramaService) { }

  ngOnInit() {
    this.loggedUser = this.authSRV.user;
    this.loadedQuizes = this.quizSRV.quizes;
    this.programaAtual = this.programaSRV.programa;
  }

}
