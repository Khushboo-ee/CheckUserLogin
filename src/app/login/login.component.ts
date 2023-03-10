import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:any;
  result:any;
  constructor(
    private builder:FormBuilder, 
    private service:LoginService,
    private router: Router
  ) { 

    sessionStorage.clear();//it will delete all meories froms ession memory.
  }

  ngOnInit(): void {
  }
  loginForm = this.builder.group(
    {
      username: this.builder.control('',Validators.required),
      password: this.builder.control('',Validators.required)

    } );

    /* Syntax for subscribe method
      this.service.GetUserByID(this.loginForm.value.username).subscribe
      (data=>{
        // onsuccess
      },
      error =>{
        //onerror
      });
*/
    proceedLogin(){
      if(this.loginForm.valid)
      {
          this.service.GetUserById(this.loginForm.value.username).subscribe(data=>{
            if(data!=null){
            this.result = data;
            if(this.result.password== this.loginForm.value.password)
            {
              sessionStorage.setItem('username', this.result.username);
                    // it will store in sessio memory(browser memory), so that it can access any other component of the site.
              this.router.navigate(['welcome']);
            }
            else
            this.msg = "Invalid password";
            }
          }, //eiher data or errror will work, data--> sucess correct username, errror-->failed to get usrename that is tored in jon file

          error=>{
            console.log(error);
            this.msg = "Invalid Username";
          });
      }
      else
      {
        this.msg = "Please fill username and password";
      }
    }
}
