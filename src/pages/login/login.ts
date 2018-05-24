import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController  } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage
{
  private email:string;
  private password:string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private event: Events,
    private login:LoginProvider,
    private toastCtrl: ToastController 
  ) {}

  submit() {
    let credentials = {email: this.email, password: this.password};
    
    this.login.attemp(credentials, res => {
      if (res.status == 'ERROR') {
        return this.toastCtrl
        .create({
          message: res.message,
          duration: 3000,
          position: 'bottom'
        })
        .present();
      }
      
      this.event.publish('login', res.token);
      this.event.publish('change-page', 1);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
