import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaySelectAddressPage } from '../pages/pay-select-address/pay-select-address';

/**
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html',
})
export class ShoppingCartPage {
	private quantity = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad ShoppingCartPage');
  }
  
	public increment () {
	  this.quantity++;
	}

	public decrement () {
	  this.quantity--;
	}
	
	public delete (){
		console.log('deleted');
	}
  
  pay(event){
	  this.navCtrl.push(PaySelectAddressPage, {fromPage: 'ShoppingCartPage'});
  }

}
