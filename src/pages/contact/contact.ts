import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [GeolocationProvider]
})
export class ContactPage {
  public latitude:any;
  public longitude:any;
  public distance:any;
  
  public activated:boolean = false;
  public message:any='fresh';
  
  constructor(public navCtrl: NavController, public geo:GeolocationProvider) {}
  
  getGeo() {
    this.message = 'loading';
    this.activated = true;
    
    this.geo.getGeolocation(coords => {
      var rad = function(x) {
        return x * Math.PI / 180;
      };
  
      var getDistance = function(p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.latitude - p1.latitude);
        var dLong = rad(p2.longitude - p1.longitude);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
      };
      
      if (coords.message) {
         this.message = coords.message; 
         return; 
      }
      
      this.distance = getDistance(coords, {
        latitude: 4.688745,
        longitude:-74.0857799
      });
          
      
    });
  }

}
