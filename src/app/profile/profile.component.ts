import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { profileData } from '../_models/ProfileData';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  baseUrl = environment.apiUrl; //production program
  
  currentUser$: Observable<User> | undefined;
  userName:any;
  profileData!:profileData;
  profileDataToSend!:profileData;
  users:any;//users test
  

  constructor(private http: HttpClient,private accountService:AccountService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getProfileData();
  }



    getProfileData() {
    this.http.get<profileData>(this.baseUrl+'profiledata/'+this.userName).subscribe((response:profileData) => {
    this.profileData=response;
    //console.log("finished!");
    }, error => { 
        console.log(error); 
      })
  }

    getCurrentUser()
  {
    this.accountService.currentUser$.subscribe(user=> {
      //console.log("PROFILE_getCurrentUser:"+user.userName);
      this.userName = user.userName;
    },error => {
      console.log(error);
    })
  }

  updateProfile() {
    this.accountService.updateProfile(this.profileData).subscribe(response =>{
      this.router.navigateByUrl('/');
      //this.router.navigateByUrl('/profile');
      this.toastr.success("profile updated");
      },
    error=>{
      //console.log(error);
      this.toastr.error("error updating profile");
      })
    }
    getUsers() {//users test
      this.http.get('http://84.16.46.127:8088/api/Users/').subscribe(response => {
          this.users=response;
        }, error => { 
            console.log(error); 
          })
      }

      getIdFromObservable(){
        
      }

    setDataToSend(){;
      this.profileDataToSend.id = this.profileData.id;
      this.profileDataToSend.userName = this.profileData.userName;
      this.profileDataToSend.stageName = this.profileData.stageName;
      this.profileDataToSend.country = this.profileData.country;
      }
    }