import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent implements OnInit {
  registerMode = false;
  users:any;
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  registerToggle()
  {
    this.registerMode = !this.registerMode; 
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}