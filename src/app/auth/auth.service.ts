import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




const API_URL = environment.apiUrl;

import { Transac } from './transac.model';
@Injectable({
  providedIn: 'root'
})


export class AuthService implements OnInit {
  currentUser: User;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    // private _authUser: User = {
    //   id: 'u1',
    //   nome: 'David Meth',
    //   saldo: 0,
    //   transacs: [

    //   ]
  };

  get user() {
    return { ... this._authUser };
  }

  sumValue(value: number) {
    this._authUser.saldo += value;
  }

  addTransac(transac: Transac) {
    this._authUser.transacs.push(transac);
  }

  public getUser() {
    return new Promise(resolve => {
      this.http.get(API_URL + '/user/1').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });

    });
  }

}
