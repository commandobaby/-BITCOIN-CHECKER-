import { Component,ViewChild } from '@angular/core';
import {  NavController, NavParams,LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobFree} from '@ionic-native/admob-free';
import * as Constant from '../../config/constants';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare var require: any;

 var hcharts=require('highcharts');
 //var Highcharts = require('highcharts');
 require('highcharts/modules/stock')(hcharts)

 @Component({
 	selector: 'page-detail',
 	templateUrl: 'detail.html',
 })
 export class DetailPage {
 	@ViewChild('lineCanvas') lineCanvas;
 	lineChart:any;
 	item:any={
 		'id' : '',
 		'symbol':'',
 		'name' : '',
 		'rank': '',
 		'price':'',
 		'market_cap':'',
 		'volume':'',
 		'percent_change_1h':'',
 		'percent_change_24h':'',
 		'percent_change_7d':'',
 		'currencies':'',
 		'total_supply':'',
 		'available_supply':''
 	}
 	constructor(
 		public navCtrl: NavController,
 		public http: Http,
 		public loadingCtrl:LoadingController,
 		public socialSharing: SocialSharing,
 		public admobFree:AdMobFree,
 		public navParams: NavParams) {
 		// set to landscape
 		this.item={
 			'id' : this.navParams.get('id'),
 			'name' : this.navParams.get('name'),
 			'symbol': this.navParams.get('symbol'),
 			'rank': this.navParams.get('rank'),
 			'price':this.navParams.get('price'),
 			'market_cap':this.navParams.get('market_cap'),
 			'volume':this.navParams.get('volume'),
 			'percent_change_1h':this.navParams.get('percent_change_1h'),
 			'percent_change_24h':this.navParams.get('percent_change_24h'),
 			'percent_change_7d':this.navParams.get('percent_change_7d'),
 			'total_supply':this.navParams.get('total_supply'),
 			'available_supply':this.navParams.get('available_supply')
 		}
 		this.admobFree.banner.config({
 			isTesting:false,
 			autoShow:true,
 			id: Constant.admobID
 		})
 		this.admobFree.banner.prepare()
 		.then(() => {
 			// banner Ad is ready
 			// if we set autoShow to false, then we will need to call the show method here
 		}).catch(e => console.log(e));
 	}

   ionViewDidLeave(){
   	  this.admobFree.banner.remove();
   }

 	share(item){
 		 this.socialSharing.share(item.name+' price:'+item.price,null, null , null); 
 	}

 	ionViewDidLoad() {
 		let loading=this.loadingCtrl.create({
 			content:'Waitting'
 		})
 		loading.present();
 		this.http.get('https://graphs.coinmarketcap.com/currencies/'+this.item.id).subscribe(data => {
 			loading.dismiss();
 			let tmpData=data.json();
 			this.lineChart = hcharts.stockChart(this.lineCanvas.nativeElement, {
 				chart: {
 					type: 'line',
 					zoomType: 'null',
 					height: 520,
 					ignoreHiddenSeries: true
 				},
 				tooltip: {
 					shared: true,
 					hideDelay: 50,
 					xDateFormat: '%A, %b %d %Y, %H:%M:%S UTC'
 				},
 				legend: {
 					enabled: true,
 					align: 'center',
 					backgroundColor: '#FFFFFF',
 					borderColor: 'black',
 					borderWidth: 0,
 					layout: 'horizontal',
 					verticalAlign: 'bottom',
 					y: 0,
 					shadow: false,
 					floating: false
 				},
 				navigator: {
 					adaptToUpdatedData: false
 				},
 				scrollbar: {
 					liveRedraw: false
 				},
 				title: {
 					text: ' Charts',
 					align: "left",
 					style: {
 						fontSize: "12px"
 					}
 				},
 				subtitle: {
 					text: ''
 				},
 				rangeSelector: {
 					allButtonsEnabled: true,
 					buttons: [{
 						type: 'day',
 						count: 1,
 						text: '1d'
 					}, {
 						type: 'week',
 						count: 1,
 						text: '7d'
 					}, {
 						type: 'month',
 						count: 1,
 						text: '1m'
 					}, {
 						type: 'year',
 						count: 1,
 						text: '1y'
 					}, {
 						type: 'ytd',
 						count: 1,
 						text: 'YTD'
 					}, {
 						type: 'all',
 						text: 'ALL'
 					}],
 					selected: 6,
 					enabled: true,
 					buttonPosition:0
 				},
 				xAxis: [{
 					events: {
 						afterSetExtremes: function(e) {
 						}
 					},
 					minRange: 24 * 3600 * 1000
 				}],
 				yAxis: [{
 					labels: {
 						formatter: function() {
 							return '$' + this.axis.defaultLabelFormatter.call(this);
 						},
 						align: 'right',
 						style: {
 							color: '#7cb5ec'
 						}
 					},
 					title: {
 						style: {
 							color: '#7cb5ec',
 							'font-weight': 'bold'
 						}
 					},
 					showEmpty: false,
 					height: '80%',
 					opposite: false,
 					floor: 0
 				}, {
 					labels: {
 						style: {
 							color: '#009933',
 						},
 						align: "left",
 						x: 15
 					},
 					title: {
 						style: {
 							color: '#009933',
 							'font-weight': 'bold'
 						}
 					},
 					showEmpty: false,
 					height: '80%',
 					opposite: true,
 					floor: 0
 				}, {
 					labels: {
 						style: {
 							color: '#f7931a',
 						},
 						align: "left",
 						x: 15
 					},
 					title: {
 						style: {
 							color: '#f7931a',
 							'font-weight': 'bold'
 						}
 					},
 					showEmpty: false,
 					height: '80%',
 					opposite: true,
 					floor: 0
 				}, {
 					labels: {
 						align: 'right',
 						style: {
 							color: '#777',
 						}
 					},
 					title: {
 						style: {
 							color: '#777',
 							'font-weight': 'bold'
 						}
 					},
 					showEmpty: false,
 					top: '80%',
 					height: '20%',
 					offset: 2,
 					lineWidth: 1,
 					opposite: false
 				}],
 				series: [{
 					name: 'Market Cap',
 					color: '#7cb5ec',
 					tooltip: {
 					},
 					data: tmpData.market_cap_by_available_supply,
 					dataGrouping: {
 						enabled: false
 					}
 				}, {
 					name: 'Price (USD)',
 					yAxis: 1,
 					color: '#009933',
 					tooltip: {

 					},
 					data: tmpData.price_usd,
 					dataGrouping: {
 						enabled: false
 					}
 				}, {
 					name: 'Price (BTC)',
 					color: '#f7931a',
 					yAxis: 2,
 					tooltip: {
 					},
 					data: tmpData.price_btc,
 					dataGrouping: {
 						enabled: false
 					}
 				}, {
 					type: 'column',
 					name: '24h Vol',
 					color: '#777',
 					yAxis: 3,
 					tooltip: {
 						// pointFormatter: tooltip_format_market_cap
 					},
 					data: tmpData.volume_usd,
 					//visible: series_is_visible(this.chartName, 3, true),
 					dataGrouping: {
 						approximation: "average",
 						enabled: false
 					}
 				}],
 				plotOptions: {
 					series: {
 						events: {
 							legendItemClick: function(event) {
 								//var index = event.target.index
 								// save_preferences(that.chartName, index, this.chart);
 							}
 						}
 					}
 				},
 			});
 		})
}
}
