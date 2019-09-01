import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class StoreService implements OnInit {

  constructor(private http: HttpClient) {

  }



  ngOnInit() {

  }

  public getProdutos() {
    return new Promise(resolve => {
      this.http.get(API_URL + '/produtos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });

    });
  }

  public comprarProdutos(idProduc, idUser) {
    return new Promise(resolve => {
      this.http.post(API_URL + '/comprar', {
        id_produto: idProduc,
        id_usuario: idUser
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });

    });
  }
}
