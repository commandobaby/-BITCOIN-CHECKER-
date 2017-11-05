import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
 	import * as Constant from '../../config/constants';
/**
 * Generated class for the GlobalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


 @Component({
 	selector: 'page-global',
 	templateUrl: 'global.html',
 })
 export class GlobalPage {
 	select_currencies:any;
 	currency:any = Constant.currency;
 	item:any={
 			"total_market_cap":'',
		    "total_24h_volume": '',
			"bitcoin_percentage_of_market_cap": '', 
			"active_currencies":'', 
			"active_assets": '', 
			"active_markets": ''
 	};
 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams,
 		public http:Http,
 		public loadingCtrl:LoadingController,
 		public storage:Storage
 		) {

 	}

 	ionViewDidEnter(){
 		this.storage.get('currency').then(data=>{
 			this.select_currencies=data;
 			this.load();
 		});
 	}

 	load(){
 		let loading=this.loadingCtrl.create({
 			content:"Waitting"
 		})
 		loading.present();
 		this.http.get('https://api.coinmarketcap.com/v1/global/?convert='+this.select_currencies).subscribe(data=>{
 			loading.dismiss();
 			let tmpData=data.json();
 			let total_market_cap;
 			let total_24h_volume;

 			if(this.select_currencies!='USD' &&  tmpData['total_market_cap_'+this.select_currencies.toLowerCase()]!=undefined){
 				total_market_cap=tmpData['total_market_cap_'+this.select_currencies.toLowerCase()]+' '+this.select_currencies;
 				total_24h_volume=tmpData['total_24h_volume_'+this.select_currencies.toLowerCase()]+' '+this.select_currencies;
 			}else{
 				total_market_cap=tmpData['total_market_cap_usd']+' '+this.select_currencies;
 				total_24h_volume=tmpData['total_24h_volume_usd']+' '+this.select_currencies;
 			}
 			this.item={
				"total_market_cap":total_market_cap , 
				"total_24h_volume": total_24h_volume, 
				"bitcoin_percentage_of_market_cap": tmpData['bitcoin_percentage_of_market_cap'], 
				"active_currencies": tmpData['active_currencies'], 
				"active_assets": tmpData['active_assets'], 
				"active_markets": tmpData['active_markets']
 			}
 		})
 	}

 	

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad GlobalPage');
 	}
 }
