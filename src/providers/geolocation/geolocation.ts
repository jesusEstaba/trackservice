import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()

export class GeolocationProvider {

  constructor(private geolocation: Geolocation) {}

  public getGeolocation(fn) {
    fn({
        "message": "init"
      });
    this.geolocation.getCurrentPosition().then((resp) => {
     fn(resp.coords);
    }).catch((error) => {
      fn({
        "message": error.message
      });
      
      //throw new Error(error);
      
    });
  }
  
  public realtime(fn) {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      fn(data.coords);
    });
  }

}
