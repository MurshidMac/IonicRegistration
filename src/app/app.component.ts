import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseApp } from 'angularfire2';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  // set the root page to be the login page

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app:FirebaseApp) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
