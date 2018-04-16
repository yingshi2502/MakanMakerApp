import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectSchedulePage } from '../select-schedule/select-schedule';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
 paymentMethods = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.paymentMethods = [
	{ 'name': 'PayPal',
	  'icon': 'pricetag'
	},
	{'name': 'Credit Card',
	  'icon': 'card'
	},
	{'name': 'Cash on Delivery',
	  'icon': 'cash'
	}
	]
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  selectSchedule(event){
	  this.navCtrl.push(SelectSchedulePage, {fromPage: 'SelectAddressPage'});
  }

}
