import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { Transac } from './transac.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private _authUser: User  = {
    id: 'u1',
    nome: 'David Meth',
    saldo: 0,
    transacs: [
      
    ]
  };
  constructor() { }
  ngOnInit(){

  }
  get user(){
    return {... this._authUser};
  }

  sumValue(value: number){
    this._authUser.saldo += value;
  }

  addTransac(transac: Transac){
    this._authUser.transacs.push(transac);
  }
}
