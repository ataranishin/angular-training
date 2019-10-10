import { Injectable } from '@angular/core';

const storageName = 'usermodel';
const userData = [
  {name: 'Alex'},
  {name: "Tom"}
];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageData;
  constructor() {
    this.storageData = JSON.parse(localStorage.getItem(storageName)) || userData;
  }

  get() {
    return [...this.storageData]
  }
  update() {
   localStorage.setItem(storageName, JSON.stringify(this.storageData));
   return this.get();
 }
  post(user) {
    this.storageData.push(user);
    return this.update();
  }
  userIndex(user) {
    return this.storageData.indexOf(user);
  }
  destroy(user) {
    this.storageData.splice(this.userIndex(user),1);
    return this.update();
  }

}
