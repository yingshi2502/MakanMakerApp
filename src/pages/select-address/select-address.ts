import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
import { PaymentPage } from '../payment/payment';
import { Address } from '../../entities/address'

import { AddressProvider } from '../../providers/address/address';


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
	addresses: Address[];
	selectedAddress;
	price;
	totalPrice;
	mealKits=[];
	customerId: number;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public addressProvider: AddressProvider) {
	  this.customerId = parseInt(sessionStorage.getItem("customerId"));
	  this.price = navParams.get('param1');
	  this.totalPrice = this.price;
	  this.mealKits = navParams.get('param2');
	  this.selectedAddress = new Address();
	  console.log("customerId: "+this.customerId);
	  this.addressProvider.retrieveAddressesByCustomerId(this.customerId).subscribe(
			response => {
				this.addresses = response.addresses;
				console.log("*AFAFAF*SF*Asdf");
				console.log('ionViewWillLoad response.addresses retrieved MyProfilePage, addresses: ' + this.addresses);
				console.log('ionViewWillEnter response MyProfilePage');
				this.infoMessage = "(Load) Addresses loaded successfully: " + response.message + ", result is: "+ response.result;								
				this.selectedAddress=this.addresses[0];
				this.totalPrice = this.totalPrice + this.selectedAddress.shippingFee;
			},
			error => {				
				this.errorMessage = "(Load) HTTP " + error.status + ": " + error.error.message;
			}
		);
		
		
	  /*this.addresses=[
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
	  ];*/
	  //console.log("****this addrees"+this.addresses);
	  //console.log("size"+Object.keys(this.addresses).length);
	  //this.selectedAddress=this.addresses[0];
  }
	

  select(index) {
    this.selectedAddress=this.addresses[index];
	console.log("postalCode"+this.selectedAddress.postalCode);
	this.totalPrice = this.selectedAddress.shippingFee + this.price;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAddressPage');
	console.log("mealkits size"+Object.keys(this.mealKits).length);
  }
	selectPayment(event){
	  this.navCtrl.push(PaymentPage, {param1: this.mealKits, param2: this.selectedAddress, param3: this.totalPrice});
  }
}
