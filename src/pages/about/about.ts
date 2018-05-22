import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage
{
  private email:string;
  private password:string;
  private img:string = "/assets/imgs/logo.png";
  
  constructor(public navCtrl: NavController) {

  }
  
  public submit()
  {
    console.log(`${this.email}`);
  }
  
  public upload()
  {
    console.log('evento que busca');
  }
}
