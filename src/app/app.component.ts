import { Component } from '@angular/core';
import { Platform, Events, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  
  private token:string = '';
  private rootPage:any;
  private sidemenu:boolean;
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    events: Events,
    private storage: Storage
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    
      storage.get('token').then((token) => {
        if (!token) {
          return this.rootPage = LoginPage;
        }
        
        this.token = token;
        this.rootPage = TabsPage;
      });
    });
    
    events.subscribe('change-page', (page) => {
      this.rootPage = this.pages[page];
      this.sidemenu = true;
    });
    
    events.subscribe('login', (token) => {
      this.token = token;
      storage.set('token', token);
    });
    
    events.subscribe('logout', (token) => {
      this.token = '';
      storage.remove('token');
    });
  }
  
  
  
}
