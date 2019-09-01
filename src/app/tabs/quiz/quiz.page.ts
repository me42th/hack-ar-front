import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { AuthService } from '../../auth/auth.service';
import { ProgramaService } from '../programa.service';
import { Transac } from '../../auth/transac.model';
import { User } from '../../auth/user.model';
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
  ok(quiz: Quiz, resp: string, id_programa: string) {
    quiz.status = false;
    let transac: Transac = {
      id_tipoResposta: '1',
      id_opcao: resp,
      id_programa: id_programa,
      id_usuario: this.loggedUser.id,
      type: 'resposta',
      valor: quiz.value,
      resposta: 'resp'
    };
    this.authSRV.addTransac(transac).then(data => {
      this.updateUser();
    });
  }

  constructor(
    private quizSRV: QuizService,
    private authSRV: AuthService,
    private programaSRV: ProgramaService) { }

  ngOnInit() {
    this.updateUser();
    this.loadedQuizes = this.quizSRV.quizes;
    this.programaAtual = this.programaSRV.programa;
  }

  private updateUser() {
    this.authSRV.getUser()
      .then(data => {
        this.loggedUser = data;
      });
  }

}
