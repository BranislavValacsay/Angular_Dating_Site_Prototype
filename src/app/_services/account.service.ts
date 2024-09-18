import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { profileData } from '../_models/ProfileData';
import { environment } from 'src/environments/environment';
import { PresenceService } from './presence.service';


@Injectable({
  providedIn: 'root'
})

export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient,private router:Router, private presence: PresenceService) { }

  login(model:any) {
    return this.http.post<User>(this.baseUrl+'account/login',model).pipe(
      map((response:User)=> {
        const user = response;
        if(user) {
          this.setCurrentUser(user);
          this.presence.creatHubConnection(user);
        }
      })
    )
  }

  register(model:any){
    return this.http.post<User>(this.baseUrl+'account/register',model).pipe(
      map((user: User)=> {
        if(user) {
          this.setCurrentUser(user);
          this.presence.creatHubConnection(user);
          this.router.navigateByUrl('/');
        }
        return user;
      })
    )
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.presence.stopHubConnection();
  }

  setCurrentUser(user:User)
  {
    if (user !== null ) {
      user.roles = [];
      const roles = this.getDecodedToken(user.token).role;
      Array.isArray(roles)? user.roles = roles : user.roles.push(roles);
      localStorage.setItem('user',JSON.stringify(user));
      this.currentUserSource.next(user);
    }

  }

  updateProfile(dataFrom:any){
    console.log("UPDATE:"+dataFrom.id);
      return this.http.put<profileData>(this.baseUrl+'Profiledata/'+dataFrom.id,dataFrom).pipe(
      map((updatedData: profileData)=> {
      console.log("Account_UpdateProfile"+updatedData);
      }),
    )
  }

  getDecodedToken(token:any) {
    return JSON.parse(atob(token.split('.')[1]))
  }
}
