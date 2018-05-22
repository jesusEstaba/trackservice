import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientsProvider
{
  constructor(public http:HttpClient)
  {
    /*
    this.luls = this.http
      .get<any>('/clients.json')
      .subscribe(response => {
          console.log(response);
      }, err => {
          console.log('Something went wrong ', err);
      })
    */
  }
  
  public getClients()
  {
    return this.http.get<any>('/clients.json');
  }
}
