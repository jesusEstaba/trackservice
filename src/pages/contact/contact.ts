import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [GeolocationProvider]
})
export class ContactPage {
  public latitude:any = 'fresh';
  public activated:boolean = false;
  
  constructor(public navCtrl: NavController, public geo:GeolocationProvider) {}
  
  getGeo() {
    this.latitude = 'loading';
    this.activated = true;
    
    this.geo.getGeolocation(coords => {
      this.latitude = coords.latitude
    });
  }

}
