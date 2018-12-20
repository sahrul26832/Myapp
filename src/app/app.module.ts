import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialInfoPage } from '../pages/social-info/social-info';
import { SMS } from '@ionic-native/sms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarcodeScarnnerPage } from '../pages/barcode-scarnner/barcode-scarnner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfoPage,
    BarcodeScarnnerPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfoPage,
    BarcodeScarnnerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
