import { Component } from '@angular/core';

/**
 * Generated class for the LolComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 import { ClientsProvider } from '../../providers/clients/clients';
 
@Component({
  selector: 'lol',
  templateUrl: 'lol.html',
  providers: [ClientsProvider]
})
export class LolComponent {

  private drivers:Array<any> = [];

  constructor(private clientsProvider:ClientsProvider)
  {
    this
      .clientsProvider
      .getClients()
      .subscribe(response => {
          this.drivers = response.clients;
      });
  }
  
  public howIs(user:any){
    console.log(user.name);
  }

}
