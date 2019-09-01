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
  
  loadedQuizes: Quiz[];
  loggedUser: User;
  next(){
    
    this.loadedQuizes = this.quizSRV.quizes;
  }
  constructor(
    private quizSRV: QuizService,
    private authSRV: AuthService) { }

  ngOnInit() {
    this.loggedUser = this.authSRV.user;
    this.loadedQuizes = this.quizSRV.quizes;
  }

}
