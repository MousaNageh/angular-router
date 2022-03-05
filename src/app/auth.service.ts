import { Injectable } from '@angular/core';

@Injectable()
export class Auth {
  private isLogin: boolean = false;
  isAuth() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogin);
      }, 1000);
    });
    return promise;
  }
  login() {
    this.isLogin = true;
  }
  logout() {
    this.isLogin = false;
  }
}
