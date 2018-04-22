import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectAddressPage } from '../select-address/select-address';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { MealKit } from '../../entities/mealKit';
import { CustomerProvider } from '../../providers/customer/customer';
import { Customer } from '../../entities/customer';
import { CartItem } from '../../entities/cartItem';

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

	quantities=[];
	mealKits=[];
	totalPrice=0;
    infoMessage: string;
	errorMessage: string;
	customerId: string;
	customer: Customer;
	customerIdString: string;
	cartItem: CartItem;
	cartItems: CartItem[];
	
  constructor(public navCtrl: NavController,
			  public navParams: NavParams,
			  public customerProvider: CustomerProvider,
			  public shoppingCartProvider: ShoppingCartProvider) {
	
				let customerIdInString: string = sessionStorage.getItem("customerId");
				this.customerId = customerIdInString; 
				
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad ShoppingCartPage');
  }
  
	/*public increment () {
	  this.quantity++;
	}

	public decrement () {
	  this.quantity--;
	}*/
	
	public delete (index){
		
		
	}
	
	ionViewDidEnter() {
		console.log('ionViewDidEnter ShoppingCartPage');

		this.shoppingCartProvider.retrieveShoppingCart(this.customerId).subscribe(
			response => {
				this.cartItems = response.items;
				this.totalPrice = response.subTotal;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}	
  
		
		pay(totalPrice){
	  console.log("mealkit size"+Object.keys(this.mealKits).length);//working
	  //calculatePrice();
	  /*for (let mealKit of this.mealKits){
			this.totalPrice+=mealKit.price*mealKit.quantity;
		}*/
<<<<<<< HEAD
	  this.navCtrl.push(SelectAddressPage, {param1: this.totalPrice, param2: this.mealKits});
=======
	  this.navCtrl.push(SelectAddressPage, {param1: this.totalPrice, param2: this.cartItems});
>>>>>>> f3bf2b2ec45e21a0156e7e62eea3bae516c95a4c
	    }

}
