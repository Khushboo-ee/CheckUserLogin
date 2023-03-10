import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg:any;
  router: Router;
  constructor(
    private builder:FormBuilder, 
    private service:LoginService
  ) { }

  ngOnInit(): void {
  }

  registerform = this.builder.group(
    {
      id: this.builder.control('',Validators.required),
      uname: this.builder.control('',Validators.required),
      password: this.builder.control('',Validators.required)

    } );

    proceedRegister(){
      if(this.registerform.valid){
        this.service.CreateNewUser(this.registerform.value).subscribe(data=>{
            alert("user registered");
        });
      }
      else{
        this.msg="Invalid form";
      }
    }
    
}
