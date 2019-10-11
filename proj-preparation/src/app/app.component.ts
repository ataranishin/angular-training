import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting = "hello";
  title = 'project-preparation';
  public isLogin: boolean = false;
  public onclicked(isLogin): void {
    this.isLogin = isLogin;
  }
}
