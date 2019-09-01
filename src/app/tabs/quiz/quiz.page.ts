import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { AuthService } from '../../auth/auth.service';
import { ProgramaService } from '../programa.service';
import { Quiz } from './quiz.model';
import { Programa } from '../programa.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  loadedQuizes: Quiz[];
  loggedUserfilms: Observable<any>;
  programaAtual: Programa;
  loggedUser;
  next() {

    this.loadedQuizes = this.quizSRV.quizes;
  }
  constructor(
    private quizSRV: QuizService,
    private authSRV: AuthService,
    private programaSRV: ProgramaService) { }

  ngOnInit() {
    this.authSRV.getUser()
      .then(data => {
        this.loggedUser = data;
      });
    this.loadedQuizes = this.quizSRV.quizes;
    this.programaAtual = this.programaSRV.programa;
  }

}
