import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userList;
  public username: string;
  public pass: string;
  constructor(private userStorageService: AuthService){}
  ngOnInit() {
    this.userList = this.userStorageService.getUserList();

  }
  addItem(name): void {
   this.userList = this.userStorageService.addItem({name});
   console.log(localStorage);
 }
 deleteItem(name) {
   this.userList = this.userStorageService.delete({name});
   console.log(localStorage);
 }

  // loginInfo() {
  //   console.log('User Name: ' + this.username);
  //   console.log('Password: ' + this.pass);
  //   localStorage.setItem('user', this.username);
  //   let curUser = JSON.parse(localStorage.getItem('user'));
  //   let token = curUser.token;
  // }
}
