import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ClientsProvider
{
  constructor(public http:HttpClient) {}
  
  public getClients(fn:any) {
    return this.http.get<any>('/clients.json').subscribe(response => {
        fn(response.clients);
    });
  }
}
