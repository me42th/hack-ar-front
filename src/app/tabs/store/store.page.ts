import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  loggedUser;
  constructor(
    private authSRV: AuthService
  ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.authSRV.getUser()
      .then(data => {
        this.loggedUser = data;
      });
  }

}
