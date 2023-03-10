import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private service:LoginService) { }
allUsers : Observable<any>
  ngOnInit(): void {
    this.allUsers = this.service.ViewAllUserinfo();
  }

}
