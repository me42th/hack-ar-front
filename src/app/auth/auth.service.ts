import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private _authUser: User  = {
    id: 'u1',
    nome: 'David Meth',
    saldo: 50,
    transacs: [
      {
      id: 't1',
      idOrigem: 'r1',
      type: 'resposta',
      valor: 50
    }
    ]
  };
  constructor() { }
  ngOnInit(){

  }
  get user(){
    return this._authUser;
  }
}
