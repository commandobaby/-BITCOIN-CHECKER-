import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as Constant from '../../config/constants';
/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
   selector: 'page-settings',
   templateUrl: 'settings.html',
 })

 export class SettingsPage {
   select_currencies:any;
   currency:any = Constant.currency;
   constructor(
     public navCtrl: NavController, 
     public storage: Storage,
     public viewCtrl: ViewController){
   }

   ionViewWillEnter(){
     this.storage.ready().then((data)=>
     this.storage.get('currency').then(data=>{
       this.select_currencies=data;
     })
     )
   }

   dismiss(){
     this.viewCtrl.dismiss();
   }

   save(){
     this.storage.set('currency',this.select_currencies).then(()=>{
       this.dismiss();
     });
   }

   open(link){
     
   }
 }
