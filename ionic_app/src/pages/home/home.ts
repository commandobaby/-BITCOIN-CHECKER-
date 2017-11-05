import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import {TopPage} from '../top/top';
//import { HTTP } from '@ionic-native/http';
import {GlobalPage} from '../global/global';
import {AboutPage} from '../about/about';
import { AdMobFree} from '@ionic-native/admob-free';
import * as Constant from '../../config/constants';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	topPage:any=TopPage;
	aboutPage:any=AboutPage;
	globalPage:any=GlobalPage;
	constructor(
		public navCtrl: NavController,
		public admobFree:AdMobFree,
//   	 	public request: HTTP,
  //      private uniqueDeviceID: UniqueDeviceID
){
		this.admobFree.interstitial.config({
			id: Constant.intAdmobId,
			autoShow:true
		})
		this.admobFree.interstitial.prepare()

/*
            this.uniqueDeviceID.get()
                .then((uuid: any) => this.uuid_in_db(uuid))
                .catch((error: any) => console.log(error));
*/

	}
/*
	uuid_in_db(uuid){

        this.request.post('http://localhost:5555/register', {id : uuid, on: "0"}, {})
            .then(data => {
                console.log(data.data);
            }).catch(error => {
            console.log(error.status);
        });
    }
*/
}
