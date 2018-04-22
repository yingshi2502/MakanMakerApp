import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectAddressPage } from '../select-address/select-address';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { MealKit } from '../../entities/mealKit';
import { CustomerProvider } from '../../providers/customer/customer';
<<<<<<< HEAD
import { Customer } from '../../entities/customer';
import { CartItem } from '../../entities/cartItem';
=======
import { Customer } from '../../entities/customer'
import { CartItem } from '../../entities/cartItem'
import { AlertController } from 'ionic-angular';
>>>>>>> e27013d84bd349089c5fef0f41a8cf91f304d1a6

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
			  public shoppingCartProvider: ShoppingCartProvider,
			  public alertCtrl: AlertController) {
	
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
	
	public delete (cartItem){
		this.mealKitIdInString = '' + cartItem.mk.mealKitId;  
		this.shoppingCartProvider.deleteItem(this.customerId, this.mealKitIdInString).subscribe(
			response => {						
				this.infoMessage = "Removed from Cart successfully";
				this.errorMessage = null;
			},
			error => {				
				this.infoMessage = null;
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);	

    let alert = this.alertCtrl.create({
      title: 'Removed from Cart!',
      subTitle: 'Item has been removed from Cart successfully!',
      buttons: ['OK']
    });
    alert.present();
		
		
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

	  this.navCtrl.push(SelectAddressPage, {param1: this.totalPrice, param2: this.cartItems});
	    }

}
