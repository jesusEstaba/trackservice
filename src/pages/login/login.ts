import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage
{
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private event: Events
  ) {}

  submit() {
    this.event.publish('change-page', 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
