webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_top__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_constants__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HTTP } from '@ionic-native/http';




//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
var HomePage = (function () {
    function HomePage(navCtrl, admobFree) {
        this.navCtrl = navCtrl;
        this.admobFree = admobFree;
        this.topPage = __WEBPACK_IMPORTED_MODULE_2__top_top__["a" /* TopPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */];
        this.globalPage = __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalPage */];
        this.admobFree.interstitial.config({
            id: __WEBPACK_IMPORTED_MODULE_6__config_constants__["c" /* intAdmobId */],
            autoShow: true
        });
        this.admobFree.interstitial.prepare();
        /*
                    this.uniqueDeviceID.get()
                        .then((uuid: any) => this.uuid_in_db(uuid))
                        .catch((error: any) => console.log(error));
        */
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\home\home.html"*/'<ion-tabs>\n  <ion-tab [root]="topPage" tabIcon="home"></ion-tab>\n  <ion-tab [root]="globalPage" tabIcon="md-globe"></ion-tab>\n  <ion-tab [root]="aboutPage" tabIcon="ios-alert"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the TopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TopPage = (function () {
    function TopPage(navCtrl, http, navParams, socialSharing, appCtrl, alertCtrl, loadingCtrl, modalCtr, storage, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtr = modalCtr;
        this.storage = storage;
        this.translateService = translateService;
        this.lists = new Array();
        this.listsTmp = new Array();
        this.currency = __WEBPACK_IMPORTED_MODULE_3__config_constants__["b" /* currency */];
        this.detailPage = __WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */];
        this.search = '';
        this.show = 100;
        this.url = "https://api.coinmarketcap.com/v1/ticker/";
        this.searching = false;
        this.storage.get('currency').then(function (data) {
            if (data == null) {
                _this.select_currencies = 'USD';
                _this.storage.set('currency', 'USD');
            }
            else {
                _this.select_currencies = data;
            }
            _this.load();
        });
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormControl */]();
    }
    TopPage.prototype.view = function (item) {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], {
            'id': item.id,
            'name': item.name,
            'symbol': item.symbol,
            'rank': item.rank,
            'price': item.price + ' ' + this.select_currencies,
            'market_cap': item.market_cap + ' ' + this.select_currencies,
            'volume': item.volume + ' ' + this.select_currencies,
            'percent_change_1h': item.percent_change_1h,
            'percent_change_24h': item.percent_change_24h,
            'percent_change_7d': item.percent_change_7d,
            'currency': this.select_currencies,
            'total_supply': item.total_supply,
            'available_supply': item.available_supply
        });
    };
    TopPage.prototype.load = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Waiting'
        });
        loading.present();
        if (this.show == 0) {
            this.show = '';
        }
        this.http.get(this.url + '?limit=' + this.show + '&convert=' + this.select_currencies).subscribe(function (data) {
            loading.dismiss();
            var tmpListData = data.json();
            _this.lists = new Array();
            _this.listsTmp = new Array();
            for (var i = 0; i < tmpListData.length; i++) {
                var tmpData = tmpListData[i];
                var price = '';
                var market_cap = '';
                var volume = '';
                if (_this.select_currencies != 'USD' && tmpData['price_' + _this.select_currencies.toLowerCase()] != undefined) {
                    price = tmpData['price_' + _this.select_currencies.toLowerCase()];
                    market_cap = tmpData['market_cap_' + _this.select_currencies.toLowerCase()];
                    volume = tmpData['24h_volume_' + _this.select_currencies.toLowerCase()];
                    console.log(price);
                }
                else {
                    price = tmpData['price_usd'];
                    market_cap = tmpData['market_cap_usd'];
                    volume = tmpData['24h_volume_usd'];
                }
                var item = {
                    'id': tmpData['id'],
                    'name': tmpData['name'],
                    'symbol': tmpData['symbol'],
                    'rank': tmpData['rank'],
                    'price': price,
                    'market_cap': market_cap,
                    'total_supply': tmpData['total_supply'],
                    'available_supply': tmpData['available_supply'],
                    'volume': volume,
                    'percent_change_1h': tmpData['percent_change_1h'],
                    'percent_change_24h': tmpData['percent_change_24h'],
                    'percent_change_7d': tmpData['percent_change_7d']
                };
                _this.listsTmp.push(item);
                console.log(_this.listsTmp);
                _this.lazyFilter();
            }
        }, function (error) {
        });
    };
    TopPage.prototype.filter = function () {
        var _this = this;
        return this.listsTmp.filter(function (item) {
            return item.name.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
    };
    TopPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    TopPage.prototype.lazyFilter = function () {
        var _this = this;
        this.doFilter();
        this.searchControl.valueChanges.debounceTime(1000).subscribe(function (search) {
            _this.searching = false;
            _this.doFilter();
        });
    };
    TopPage.prototype.doFilter = function () {
        this.lists = this.filter();
    };
    TopPage.prototype.settings = function () {
        var modal = this.modalCtr.create(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
        modal.present();
    };
    TopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopPage');
        this.lazyFilter();
    };
    TopPage.prototype.share = function (item) {
        this.socialSharing.share(item.name + ' price:' + item.price + '' + this.select_currencies, null, null, null);
    };
    TopPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    return TopPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], TopPage.prototype, "content", void 0);
TopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-top',template:/*ion-inline-start:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\top\top.html"*/'<!--\n  Generated template for the TopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n<ion-navbar>\n<img src="assets/img/logo.png" style="height: 25px;margin-left: 10px" />\n<span style="float:right;margin-right:10px">\n <ion-icon name="refresh" (click)="load()"></ion-icon>\n <ion-icon (click)="settings()" name="settings" style="margin-left: 20px"></ion-icon>\n</span>\n</ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n<ion-searchbar [(ngModel)]="search" [formControl]="searchControl"  [showCancelButton]="shouldShowCancel" (ionInput)="onSearchInput()">\n</ion-searchbar>\n<ion-item>\n<ion-label>{{\'show\' | translate}}</ion-label>\n<ion-select [(ngModel)]="show" (ionChange)="load()">\n<ion-option value="100">top 100</ion-option>\n<ion-option value="200">{{\'top_200\' | translate}}</ion-option>\n<ion-option value="300">{{\'top_300\' | translate}}</ion-option>\n<ion-option value="400">{{\'top_400\' | translate}}</ion-option>\n<ion-option value="0">{{\'all\' | translate}}</ion-option>\n</ion-select>\n</ion-item>\n<ion-item>\n<ion-label>{{\'show_in_currency\' | translate}}</ion-label>\n<ion-select [(ngModel)]="select_currencies" (ionChange)="load()">\n<ion-option *ngFor="let item of currency" value="{{item}}">{{item}}</ion-option>\n</ion-select>\n</ion-item>\n</ion-list>\n\n<ion-card *ngFor="let item of lists">\n<ion-card-header>\n<img src="https://files.coinmarketcap.com/static/img/coins/16x16/{{item.id}}.png" style="width: 16px;height: 16px;float:left" />&nbsp;{{item.name}} <span class="symbol">{{item.symbol}}</span>\n</ion-card-header>\n\n<ion-card-content  (click)="view(item)">\n<div><span class="caption">{{\'price\' | translate}}</span>{{item.price+\' \'+select_currencies}}\n</div>\n<div>\n  <span class="caption">{{\'market_cap\' | translate}}</span>{{item.market_cap+\' \'+select_currencies}}\n</div>\n<div><span class="caption">{{\'24h_volume\' | translate}}</span>{{item.volume+\' \'+select_currencies}}</div>\n<div><span class="caption">{{\'total_supply\' | translate}}</span>{{item.total_supply}}</div>\n<div><span class="caption">{{\'available_supply\' | translate}}</span>{{item.available_supply}}</div>\n\n<div><span class="caption">{{\'%1h\' | translate}}</span>\n\n  <span *ngIf="item.percent_change_1h > 0">\n    <ion-badge color="secondary">\n    <ion-icon name="arrow-round-up"></ion-icon>\n    {{item.percent_change_1h}}%</ion-badge>\n  </span>\n\n  <span *ngIf="item.percent_change_1h < 0">\n    <ion-badge color="danger">\n    <ion-icon name="arrow-round-down"></ion-icon>\n    {{item.percent_change_1h}}%</ion-badge>\n  </span>\n</div>\n\n\n<div><span class="caption">{{\'%24h\' | translate}}</span>\n  <span *ngIf="item.percent_change_24h > 0">\n   <ion-badge color="secondary">\n   <ion-icon name="arrow-round-up"></ion-icon>\n   {{item.percent_change_24h}}%</ion-badge>\n </span>\n\n <span *ngIf="item.percent_change_24h < 0">\n\n   <ion-badge color="danger">\n   <ion-icon name="arrow-round-down"></ion-icon>\n   {{item.percent_change_24h}}%</ion-badge>\n </span>\n</div>\n\n\n<div><span class="caption">{{\'%7d\' | translate}}</span>\n <span *ngIf="item.percent_change_7d > 0">\n  <ion-badge color="secondary">\n  <ion-icon name="arrow-round-up"></ion-icon>\n  {{item.percent_change_7d}}%\n  </ion-badge>\n</span>\n\n<span *ngIf="item.percent_change_7d < 0">\n  <ion-badge color="danger">\n  <ion-icon name="arrow-round-down"></ion-icon>\n  {{item.percent_change_7d}}%\n</ion-badge>\n</span>\n</div>\n\n\n</ion-card-content>\n<ion-row style="border-top:1px solid #e8e8e8" padding>\n<ion-col col-6 style="text-align: center;">\n<a (click)=\'view(item)\' style="color: #212121"><ion-icon name="md-eye"></ion-icon></a></ion-col>\n<ion-col col-6 style="text-align:center">\n<a (click)=\'share(item)\' style="color: #212121"><ion-icon name="md-share"></ion-icon></a>\n</ion-col>\n\n</ion-row>\n</ion-card>\n\n<ion-fab bottom right>\n   <button ion-fab style="background: #E91E63" (click)="scrollToTop()"><ion-icon name="arrow-dropup"></ion-icon></button>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\top\top.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
], TopPage);

//# sourceMappingURL=top.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_constants__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var hcharts = __webpack_require__(286);
//var Highcharts = require('highcharts');
__webpack_require__(287)(hcharts);
var DetailPage = (function () {
    function DetailPage(navCtrl, http, loadingCtrl, socialSharing, admobFree, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.admobFree = admobFree;
        this.navParams = navParams;
        this.item = {
            'id': '',
            'symbol': '',
            'name': '',
            'rank': '',
            'price': '',
            'market_cap': '',
            'volume': '',
            'percent_change_1h': '',
            'percent_change_24h': '',
            'percent_change_7d': '',
            'currencies': '',
            'total_supply': '',
            'available_supply': ''
        };
        // set to landscape
        this.item = {
            'id': this.navParams.get('id'),
            'name': this.navParams.get('name'),
            'symbol': this.navParams.get('symbol'),
            'rank': this.navParams.get('rank'),
            'price': this.navParams.get('price'),
            'market_cap': this.navParams.get('market_cap'),
            'volume': this.navParams.get('volume'),
            'percent_change_1h': this.navParams.get('percent_change_1h'),
            'percent_change_24h': this.navParams.get('percent_change_24h'),
            'percent_change_7d': this.navParams.get('percent_change_7d'),
            'total_supply': this.navParams.get('total_supply'),
            'available_supply': this.navParams.get('available_supply')
        };
        this.admobFree.banner.config({
            isTesting: false,
            autoShow: true,
            id: __WEBPACK_IMPORTED_MODULE_5__config_constants__["a" /* admobID */]
        });
        this.admobFree.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        }).catch(function (e) { return console.log(e); });
    }
    DetailPage.prototype.ionViewDidLeave = function () {
        this.admobFree.banner.remove();
    };
    DetailPage.prototype.share = function (item) {
        this.socialSharing.share(item.name + ' price:' + item.price, null, null, null);
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Waitting'
        });
        loading.present();
        this.http.get('https://graphs.coinmarketcap.com/currencies/' + this.item.id).subscribe(function (data) {
            loading.dismiss();
            var tmpData = data.json();
            _this.lineChart = hcharts.stockChart(_this.lineCanvas.nativeElement, {
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
                    buttonPosition: 0
                },
                xAxis: [{
                        events: {
                            afterSetExtremes: function (e) {
                            }
                        },
                        minRange: 24 * 3600 * 1000
                    }],
                yAxis: [{
                        labels: {
                            formatter: function () {
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
                        tooltip: {},
                        data: tmpData.market_cap_by_available_supply,
                        dataGrouping: {
                            enabled: false
                        }
                    }, {
                        name: 'Price (USD)',
                        yAxis: 1,
                        color: '#009933',
                        tooltip: {},
                        data: tmpData.price_usd,
                        dataGrouping: {
                            enabled: false
                        }
                    }, {
                        name: 'Price (BTC)',
                        color: '#f7931a',
                        yAxis: 2,
                        tooltip: {},
                        data: tmpData.price_btc,
                        dataGrouping: {
                            enabled: false
                        }
                    }, {
                        type: 'column',
                        name: '24h Vol',
                        color: '#777',
                        yAxis: 3,
                        tooltip: {},
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
                            legendItemClick: function (event) {
                                //var index = event.target.index
                                // save_preferences(that.chartName, index, this.chart);
                            }
                        }
                    }
                },
            });
        });
    };
    return DetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], DetailPage.prototype, "lineCanvas", void 0);
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title><img src="https://files.coinmarketcap.com/static/img/coins/16x16/{{item.id}}.png" style="width: 16px;height: 16px;float:left;margin-top: 5px" />&nbsp;{{item.name}}-{{item.symbol}}-#{{item.rank}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-card >\n<ion-card-content >\n<div><span class="caption">Price</span>{{item.price}}\n</div>\n<div>\n  <span class="caption">MarketCap</span>{{item.market_cap}}\n</div>\n<div><span class="caption">24h Volume</span>{{item.volume}}</div>\n<div><span class="caption">Total Supply</span>{{item.total_supply}}</div>\n<div><span class="caption">Available Supply</span>{{item.available_supply}}</div>\n\n<div><span class="caption">%1h</span>\n\n  <span *ngIf="item.percent_change_1h > 0">\n    <ion-badge color="secondary">\n    <ion-icon name="arrow-round-up"></ion-icon>\n    {{item.percent_change_1h}}%</ion-badge>\n  </span>\n\n  <span *ngIf="item.percent_change_1h < 0">\n    <ion-badge color="danger">\n    <ion-icon name="arrow-round-down"></ion-icon>\n    {{item.percent_change_1h}}%</ion-badge>\n  </span>\n\n</div>\n\n\n<div><span class="caption">%24h</span>\n  <span *ngIf="item.percent_change_24h > 0">\n   <ion-badge color="secondary">\n   <ion-icon name="arrow-round-up"></ion-icon>\n   {{item.percent_change_24h}}%</ion-badge>\n </span>\n\n <span *ngIf="item.percent_change_24h < 0">\n\n   <ion-badge color="danger">\n   <ion-icon name="arrow-round-down"></ion-icon>\n   {{item.percent_change_24h}}%</ion-badge>\n </span>\n</div>\n\n\n<div><span class="caption">%7d</span>\n <span *ngIf="item.percent_change_7d > 0">\n  <ion-badge color="secondary">\n  <ion-icon name="arrow-round-up"></ion-icon>\n  {{item.percent_change_7d}}%\n  </ion-badge>\n</span>\n\n<span *ngIf="item.percent_change_7d < 0">\n  <ion-badge color="danger">\n  <ion-icon name="arrow-round-down"></ion-icon>\n  {{item.percent_change_7d}}%\n</ion-badge>\n</span>\n</div>\n\n\n<button ion-button round full (click)="share(item)">{{\'share\' | translate}}</button>\n</ion-card-content>\n</ion-card>\n\n\n <div #lineCanvas style="width:100%; height:200px;"></div> \n</ion-content>\n'/*ion-inline-end:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.currency = __WEBPACK_IMPORTED_MODULE_3__config_constants__["b" /* currency */];
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function (data) {
            return _this.storage.get('currency').then(function (data) {
                _this.select_currencies = data;
            });
        });
    };
    SettingsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.save = function () {
        var _this = this;
        this.storage.set('currency', this.select_currencies).then(function () {
            _this.dismiss();
        });
    };
    SettingsPage.prototype.open = function (link) {
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\settings\settings.html"*/'\n<ion-content padding class="food-detail">\n  <ion-row class="close-modal" (click)="dismiss()"></ion-row>\n  <ion-row class="main-modal" col-2>\n    <div class="wrapper">\n      <ion-item>\n        <ion-label>Default Currency</ion-label>\n        <ion-select [(ngModel)]="select_currencies" (ionChange)="save()">\n        <ion-option *ngFor="let item of currency" value="{{item}}">{{item}}</ion-option>\n      </ion-select>\n      <button ion-button>Default</button>\n      </ion-item>\n    </div>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_constants__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GlobalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GlobalPage = (function () {
    function GlobalPage(navCtrl, navParams, http, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.currency = __WEBPACK_IMPORTED_MODULE_4__config_constants__["b" /* currency */];
        this.item = {
            "total_market_cap": '',
            "total_24h_volume": '',
            "bitcoin_percentage_of_market_cap": '',
            "active_currencies": '',
            "active_assets": '',
            "active_markets": ''
        };
    }
    GlobalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('currency').then(function (data) {
            _this.select_currencies = data;
            _this.load();
        });
    };
    GlobalPage.prototype.load = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Waitting"
        });
        loading.present();
        this.http.get('https://api.coinmarketcap.com/v1/global/?convert=' + this.select_currencies).subscribe(function (data) {
            loading.dismiss();
            var tmpData = data.json();
            var total_market_cap;
            var total_24h_volume;
            if (_this.select_currencies != 'USD' && tmpData['total_market_cap_' + _this.select_currencies.toLowerCase()] != undefined) {
                total_market_cap = tmpData['total_market_cap_' + _this.select_currencies.toLowerCase()] + ' ' + _this.select_currencies;
                total_24h_volume = tmpData['total_24h_volume_' + _this.select_currencies.toLowerCase()] + ' ' + _this.select_currencies;
            }
            else {
                total_market_cap = tmpData['total_market_cap_usd'] + ' ' + _this.select_currencies;
                total_24h_volume = tmpData['total_24h_volume_usd'] + ' ' + _this.select_currencies;
            }
            _this.item = {
                "total_market_cap": total_market_cap,
                "total_24h_volume": total_24h_volume,
                "bitcoin_percentage_of_market_cap": tmpData['bitcoin_percentage_of_market_cap'],
                "active_currencies": tmpData['active_currencies'],
                "active_assets": tmpData['active_assets'],
                "active_markets": tmpData['active_markets']
            };
        });
    };
    GlobalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalPage');
    };
    return GlobalPage;
}());
GlobalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-global',template:/*ion-inline-start:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\global\global.html"*/'<!--\n  Generated template for the GlobalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n<ion-navbar>\n<ion-title>{{\'global\' | translate}}</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-list>\n<ion-item>\n<ion-label>{{\'show_in_currency\' | translate}}</ion-label>\n<ion-select [(ngModel)]="select_currencies" (ionChange)="load()">\n<ion-option *ngFor="let item of currency" value="{{item}}">{{item}}</ion-option>\n</ion-select>\n</ion-item>\n</ion-list>\n\n<ion-grid>\n  <ion-row>\n     <ion-col col-6 class="caption">\n        <div>{{\'total_market_cap\' | translate}}</div>\n     </ion-col>\n     <ion-col col-6>\n     	 <div>{{item.total_market_cap}}</div>\n     </ion-col>\n  </ion-row>\n\n    <ion-row>\n     <ion-col col-6 class="caption">\n        <div>{{\'total_24h_volume\' | translate}}</div>\n     </ion-col>\n     <ion-col col-6>\n        <div>{{item.total_24h_volume}}</div>\n     </ion-col>\n  </ion-row>\n\n\n    <ion-row>\n     <ion-col col-6 class="caption">\n        <div>{{\'bitcoin_percent_of_market_cap\' | translate}}</div>\n     </ion-col>\n     <ion-col col-6>\n        <div>{{item.bitcoin_percentage_of_market_cap}}</div>\n     </ion-col>\n  </ion-row>\n\n\n    <ion-row>\n     <ion-col col-6 class="caption">\n       <div>{{\'active_currencies\' | translate}}</div>\n     </ion-col>\n     <ion-col col-6>\n        <div>{{item.active_currencies}}</div>\n     </ion-col>\n  </ion-row>\n\n    <ion-row>\n     <ion-col col-6 class="caption">\n        <div>{{\'active_assets\' | translate}}</div>\n     </ion-col>\n     <ion-col col-6>\n        <div>{{item.active_assets}}</div>\n     </ion-col>\n  </ion-row>\n\n    <ion-row>\n     <ion-col col-6 class="caption">\n        <div>{{\'active_markets\' | translate}}</div>\n     </ion-col>\n     <ion-col col-6>\n        <div>{{item.active_markets}}</div>\n     </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\global\global.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], GlobalPage);

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.social = __WEBPACK_IMPORTED_MODULE_2__config_constants__["d" /* social */];
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.open = function (link) {
        this.iab.create(link);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n<ion-navbar>\n<ion-title>\n  {{\'about\' | translate}}\n</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n{{\'about_note\' | translate}}\n\n<div style="margin-top: 10px" class="social">\n	<ion-icon name="logo-facebook" (click)="open(social.facebook_link)"></ion-icon>\n	<ion-icon name="logo-twitter" (click)="open(social.twitter_link)"></ion-icon>\n	<ion-icon name="logo-instagram" (click)="open(social.instagram_link)"></ion-icon>\n	<ion-icon name="logo-pinterest" (click)="open(social.pinterest_link)"></ion-icon>\n</div>\n<br>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_top_top__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_global_global__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_admob_free__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_http_loader__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















/*translate loader*/


/*end translate loader*/
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_18__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_top_top__["a" /* TopPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_global_global__["a" /* GlobalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_top_top__["a" /* TopPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_global_global__["a" /* GlobalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, translate, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            translate.setDefaultLang('en');
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Melchior\Desktop\WALLSTREET\ionic_app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return admobID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intAdmobId; });
var currency = [
    "USD",
    "AUD",
    "BRL",
    "ZAR"
];
var social = {};
var admobID = 'ca-app-pub-1610982520322923/4857103891';
var intAdmobId = 'ca-app-pub-1610982520322923/9673055492';
//# sourceMappingURL=constants.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map