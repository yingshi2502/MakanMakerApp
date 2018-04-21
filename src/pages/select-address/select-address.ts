import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
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
	selectedAddress;
	totalPrice;
	mealKits=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.totalPrice = navParams.get('param1');
	  this.mealKits = navParams.get('param2');
	  this.addresses=[
	  {
		  addressId:1,
		  streetAddress:"15 Siglap",
		  postalCode:"448879",
		  shippingFee:10
	  },
	  {
		  addressId:2,
		  streetAddress:"17 PGP",
		  postalCode:"123456",
		  shippingFee:5
	  },
	  {
		  addressId:3,
		  streetAddress:"1 UTown",
		  postalCode:"122231",
		  shippingFee:2
	  }
	  ];
	  this.selectedAddress=this.addresses[0];
  }
	

  select(index) {
    this.selectedAddress=this.addresses[index];
	console.log("postalCode"+this.selectedAddress.postalCode);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAddressPage');
	console.log("mealkits size"+Object.keys(this.mealKits).length);
  }
	selectPayment(event){
	  this.navCtrl.push(PaymentPage, {param1: this.mealKits, param2: this.selectedAddress});
  }
}
