import { Component } from '@angular/core';
import { Platform, Events, MenuController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private pages:any = [
    LoginPage,
    TabsPage 
  ];
  
  rootPage:any = LoginPage;
  sidemenu:boolean;
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    events: Events
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    events.subscribe('change-page', (page) => {
      this.rootPage = this.pages[page];
      this.sidemenu = true;
    });
  }
}
