import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private uservice: UserService) {}
    getUserList(){
      return this.uservice.get();
    };
    updateList() {
      return this.uservice.update();
    }
    addItem(item) {
      return this.uservice.post(item);
    };
    delete(item) {
      return this.uservice.destroy(item);
    }
}
