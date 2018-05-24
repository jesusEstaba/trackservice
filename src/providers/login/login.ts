import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {}
  
  attemp(credentials, fn) {
    this.http.post('https://track-backend.now.sh/login', credentials).subscribe(res => {
      fn(res);
    });
  }

}
