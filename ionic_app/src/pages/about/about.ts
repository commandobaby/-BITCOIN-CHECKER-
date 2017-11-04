import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Constant from '../../config/constants';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  social:any = Constant.social;
  constructor(
  	public navCtrl: NavController, 
  	public iab: InAppBrowser,
  	public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  open(link){
	this.iab.create(link);
  }

}
