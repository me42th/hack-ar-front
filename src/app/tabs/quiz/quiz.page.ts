import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { Quiz } from './quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  cont: number = 0;
  loadedQuiz: Quiz;
  loggedUser: User;
  next(){
    this.cont++;
    this.loadedQuiz = this.quizSRV.quizes[this.cont];
  }
  constructor(
    private quizSRV: QuizService,
    private authSRV: AuthService) { }

  ngOnInit() {
    this.loggedUser = this.authSRV.user;
    this.loadedQuiz = this.quizSRV.quizes[this.cont]; 
  }

}
