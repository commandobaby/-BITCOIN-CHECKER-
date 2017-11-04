import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule,Http} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TopPage} from '../pages/top/top';
import {DetailPage} from '../pages/detail/detail';
import {SettingsPage} from '../pages/settings/settings';
import {AboutPage} from '../pages/about/about';
import {GlobalPage} from '../pages/global/global';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import {AdMobFree} from '@ionic-native/admob-free';


/*translate loader*/
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/*end translate loader*/

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  TopPage,
  DetailPage,
  SettingsPage,
  AboutPage,
  GlobalPage
  ],
  imports: [
  BrowserModule,
  HttpModule,
  IonicStorageModule.forRoot(),
  IonicModule.forRoot(MyApp),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  TopPage,
  DetailPage,
  SettingsPage,
  AboutPage,
  GlobalPage
  ],
  providers: [
  InAppBrowser,
  StatusBar,
  SocialSharing,
  HttpModule,
  AdMobFree,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
