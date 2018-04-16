import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { Address } from '../../entities/address'

/**
 * Generated class for the SelectAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-address',
  templateUrl: 'select-address.html',
})
export class SelectAddressPage {
	addresses=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.addresses=[
	  {
		  addressId:1,
		  streetAddress:"15 Siglap",
		  postalCode:"448879"
	  },
	  {
		  addressId:2,
		  streetAddress:"17 PGP",
		  postalCode:"123456"
	  },
	  {
		  addressId:3,
		  streetAddress:"1 UTown",
		  postalCode:"122231"
	  }
	  ]
  }
	

  addressSelected(address: string) {
	//var isChecked = e.currentTarget.checked;
    console.log("Selected Address", address);
	//console.log(this.checked);//it is working !!!
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAddressPage');
  }
	selectPayment(event){
	  this.navCtrl.push(PaymentPage, {fromPage: 'SelectSchedulePage'});
  }
}
