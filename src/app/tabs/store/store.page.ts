import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  loggedUser: User;
  constructor(
    private authSRV: AuthService
    ) { }

  ngOnInit() {
    this.loggedUser = this.authSRV.user;
  }

}
