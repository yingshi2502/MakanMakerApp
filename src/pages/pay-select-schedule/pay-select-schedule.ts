import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../pages/payment/payment';

/**
 * Generated class for the PaySelectSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pay-select-schedule',
  templateUrl: 'pay-select-schedule.html',
})
export class PaySelectSchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySelectSchedulePage');
  }
	payConfirm(event){
	  this.navCtrl.push(PaymentPage, {fromPage: 'PaySelectSchedulePage'});
  }
}
