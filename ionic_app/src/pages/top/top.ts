import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App,LoadingController,AlertController,ModalController,Content} from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import * as Constant from '../../config/constants';
import { DetailPage } from '../detail/detail';
import { SettingsPage } from '../settings/settings';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { TranslateService } from '@ngx-translate/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import {FormControl} from '@angular/forms';
/**
 * Generated class for the TopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-top',
 	templateUrl: 'top.html',
 })
 export class TopPage {
 	@ViewChild(Content) content: Content;
 	lists:any=new Array();
 	listsTmp:any=new Array();
 	currency:any = Constant.currency;
 	select_currencies:any;
 	detailPage:any=DetailPage;
 	search:string='';
 	show:any=100;
 	url:any="https://api.coinmarketcap.com/v1/ticker/";
 	searchControl: FormControl;
   searching: any = false;
   constructor(
     public navCtrl: NavController, 
     public http: Http,
     public navParams: NavParams,
     public socialSharing: SocialSharing,
     public appCtrl:App,
     public alertCtrl:AlertController,
     public loadingCtrl:LoadingController,
     public modalCtr:ModalController,
     public storage:Storage,
     public translateService:TranslateService
     ) {
     this.storage.get('currency').then(data=>{
       if(data==null){
         this.select_currencies='USD';
         this.storage.set('currency','USD');
       }else{
         this.select_currencies=data;
       }
       this.load();
     });
     this.searchControl=new FormControl();
   }

   view(item){
     this.appCtrl.getRootNav().push(DetailPage,{
       'id':item.id,
       'name':item.name,
       'symbol':item.symbol,
       'rank':item.rank,
       'price':item.price+' '+this.select_currencies,
       'market_cap':item.market_cap+' '+this.select_currencies,
       'volume':item.volume+' '+this.select_currencies,
       'percent_change_1h':item.percent_change_1h,
       'percent_change_24h':item.percent_change_24h,
       'percent_change_7d':item.percent_change_7d,
       'currency':this.select_currencies,
       'total_supply':item.total_supply,
       'available_supply':item.available_supply
     });
   }

   load(){
     let loading=this.loadingCtrl.create({
       content:'Waiting'
     })
     loading.present();
     if(this.show==0){
       this.show='';
     }
     this.http.get(this.url+'?limit='+this.show+'&convert='+this.select_currencies).subscribe(data => {
       loading.dismiss();
       let tmpListData=data.json();
       this.lists=new Array();
       this.listsTmp=new Array();
       for (var i = 0; i< tmpListData.length;i++) {
         let tmpData=tmpListData[i];
         let price='';
         let market_cap='';
         let volume='';
         if(this.select_currencies!='USD' &&  tmpData['price_'+this.select_currencies.toLowerCase()]!=undefined){
           price=tmpData['price_'+this.select_currencies.toLowerCase()];
           market_cap=tmpData['market_cap_'+this.select_currencies.toLowerCase()];
           volume=tmpData['24h_volume_'+this.select_currencies.toLowerCase()];
           console.log(price)
         }else{
           price=tmpData['price_usd'];
           market_cap=tmpData['market_cap_usd'];
           volume=tmpData['24h_volume_usd'];
         }
         let item ={
           'id' : tmpData['id'],
           'name' : tmpData['name'],
           'symbol': tmpData['symbol'],
           'rank': tmpData['rank'],
           'price':price,
           'market_cap':market_cap,
           'total_supply':tmpData['total_supply'],
           'available_supply':tmpData['available_supply'],
           'volume':volume,
           'percent_change_1h':tmpData['percent_change_1h'],
           'percent_change_24h':tmpData['percent_change_24h'],
           'percent_change_7d':tmpData['percent_change_7d']
         }

         this.listsTmp.push(item);
         console.log(this.listsTmp);
         this.lazyFilter();
       }
     }, error => {
     })  	
   }

   filter(){
     return this.listsTmp.filter((item) => {
       return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;  
     })
   }

   onSearchInput(){
     this.searching = true;
   }

   lazyFilter(){
     this.doFilter();
     this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
       this.searching = false;
       this.doFilter();
     });
   }

   doFilter(){
     this.lists=this.filter();
   }

   settings(){
     let modal = this.modalCtr.create(SettingsPage);
     modal.present();
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad TopPage');
     this.lazyFilter();
   }

   share(item){
     this.socialSharing.share(item.name+' price:'+item.price+''+this.select_currencies,null, null , null); 
   }

   scrollToTop() {
     this.content.scrollToTop();
   }

 }
