import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaySelectSchedulePage } from '../pages/pay-select-schedule/pay-select-schedule';

/**
 * Generated class for the PaySelectAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pay-select-address',
  templateUrl: 'pay-select-address.html',
})
export class PaySelectAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySelectAddressPage');
  }
  selectSchedule(event){
	  this.navCtrl.push(PaySelectAddressPage, {fromPage: 'PaySelectAddressPage'});
  }

}
