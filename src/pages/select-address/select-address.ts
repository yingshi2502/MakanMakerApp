import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
import { PaymentPage } from '../payment/payment';
import { Address } from '../../entities/address';
import { CartItem } from '../../entities/cartItem';

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
	cartItems: CartItem[];
	customerId: number;
	errorMessage: string;
	infoMessage: string;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public addressProvider: AddressProvider) {
	  this.customerId = parseInt(sessionStorage.getItem("customerId"));
	  this.price = navParams.get('param1');
	  this.totalPrice = this.price;
	  this.cartItems = navParams.get('param2');
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
  }
	

  select(index) {
    this.selectedAddress=this.addresses[index];
	console.log("postalCode"+this.selectedAddress.postalCode);
	this.totalPrice = this.selectedAddress.shippingFee + this.price;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAddressPage');
	console.log("cartItems size"+Object.keys(this.cartItems).length);
  }
	selectPayment(event){
	  this.navCtrl.push(PaymentPage, {param1: this.cartItems, param2: this.selectedAddress, param3: this.totalPrice});
  }
}
