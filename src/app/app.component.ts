import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TwoJam';
  users:any;
  constructor(private accountService: AccountService, private presence: PresenceService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.accountService.setCurrentUser(user);
      this.presence.creatHubConnection(user);
    }
  }
}
