import { getCurrencySymbol } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { error } from 'protractor';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { User } from '../_models/User';
import { userInfo } from 'os';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Input } from '@angular/core';
import { Member } from '../_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  model:any = {}
  currentUser$: Observable<User> | undefined;
  userName:any;

  member:Member;
  user:User;

  darkNavToggle:boolean = false;


constructor(private accountService:AccountService, private router:Router) {
  this.accountService.currentUser$.pipe(take(1)).subscribe(user=> this.user = user);
 }

 @HostListener('window:scroll') onScroll(e: Event): void {
  this.paintNavBar(e);
}
  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    }

login() {
  this.accountService.login(this.model).subscribe(response =>{
    this.router.navigateByUrl('/members');
    this.getCurrentUser();
    
    },)
  }
  
logout() {
  this.accountService.logout();
  this.router.navigateByUrl('/');
  
  }

  getCurrentUser()
  {
      this.accountService.currentUser$.subscribe(user=> {
      try {
        this.userName = user.userName;
      }
      catch {}
    },error => {
      console.log(error);
    })
  }

  paintNavBar(e: Event): number {
    if (window.scrollY > 100) {
      this.darkNavToggle = true;
    }

    if (window.scrollY < 100) {
      this.darkNavToggle = false;
    }
    return window.scrollY;
  }  


}