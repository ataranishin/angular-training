import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  @Output() public clicked: EventEmitter<boolean> = new EventEmitter();
  constructor(private userStorageService: AuthService){}
  ngOnInit() {
    this.userList = this.userStorageService.getUserList();

  }
  isVisible() {
    this.clicked.emit(true);
  }

  displayCourses() {
    console.log(this.userStorageService.isAuth());
  }
  addItem(name): void {
   this.userList = this.userStorageService.addItem({name});
   console.log(localStorage);
 }
 deleteItem(name) {
   this.userList = this.userStorageService.delete({name});
   console.log(localStorage);
 }
}
