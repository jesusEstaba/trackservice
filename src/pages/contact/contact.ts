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
      
      var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.latitude - p1.latitude;
  var dLong = rad(p2.longitude - p1.longitude);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};
      
        
      this.latitude = getDistance(coords, {
        latitude: 4.688745,
        longitude:-74.0857799
      });
    });
  }

}
