import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { StoreService } from '../store/store.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  loggedUser;
  products;
  constructor(
    private authSRV: AuthService, private storeSRV: StoreService
  ) { }

  buy(id: any) {
    this.storeSRV.comprarProdutos(id, this.loggedUser.id)
      .then(data => {
        this.updateUser();
        this.storeSRV.getProdutos()
          .then(data => {
            this.products = data;
          });
      });
  }
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.updateUser();
    this.storeSRV.getProdutos()
      .then(data => {
        this.products = data;
      });
  }

  private updateUser() {
    this.authSRV.getUser()
      .then(data => {
        this.loggedUser = data;
      });
  }

}
