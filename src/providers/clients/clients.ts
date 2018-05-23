import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ClientsProvider
{
  constructor(public http:HttpClient) {}
  
  public getClients(fn:any) {
    return this.http.get<any>('https://track-backend.now.sh/clients')
    .subscribe(response => {
        fn(response);
    }, err => {console.log(err)});
  }
}
