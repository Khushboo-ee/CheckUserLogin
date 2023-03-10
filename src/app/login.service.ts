import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  private apiUrl = "http://localhost:3000/userinfo";

  CreateNewUser(userdata:any){
    return this.http.post(this.apiUrl,userdata);
  }

  ViewAllUserinfo(){
    return this.http.get(this.apiUrl);
  }

  GetUserById(username:any){
    return this.http.get(this.apiUrl + '/' + username);
  }

  CheckLoginUser(){
    return sessionStorage.getItem('username')!=null;// if gteItem have a value wiil return true else false.
  }
}
