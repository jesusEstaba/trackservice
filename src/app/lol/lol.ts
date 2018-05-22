import { Component } from '@angular/core';
import { ClientsProvider } from '../../providers/clients/clients';
 
@Component({
  selector: 'lol',
  templateUrl: 'lol.html',
  providers: [ClientsProvider]
})

export class LolComponent {
  private drivers:Array<any> = [];

  constructor(private clientsProvider:ClientsProvider) {
    this.clientsProvider.getClients(clients => {
        this.drivers = clients;
    });
  }
  
  public howIs(user:any) {
    console.log(user.name);
  }
}
