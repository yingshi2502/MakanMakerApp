import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SelectAddressPage } from '../select-address/select-address';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { MealKit } from '../../entities/mealKit';
import { CustomerProvider } from '../../providers/customer/customer';
import { Customer } from '../../entities/customer';
import { CartItem } from '../../entities/cartItem';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { CategoriesPage } from '../categories/categories';

import { AlertController } from 'ionic-angular';

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
	mealKitIdInString:string;
	nothing:boolean=false;
	
  constructor(public navCtrl: NavController,
			  public navParams: NavParams,
			  public customerProvider: CustomerProvider,
			  public shoppingCartProvider: ShoppingCartProvider,
			  public loadingCtrl: LoadingController,
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
	
	public delete (cartItem,i:number){
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
		console.log(i);	
		this.cartItems.splice(i,1);
		if (Object.keys(this.cartItems).length == 0){
					this.nothing = true;
					console.log("nothing");
				}
		
	}
	

	ionViewWillEnter() {
		console.log('ionView WILL Enter ShoppingCartPage');

		if (sessionStorage.getItem("isLogin")!="true"){
			this.doAlert();
		}else{
			let loading = this.loadingCtrl.create({
			content: 'Loading...'
		});
		loading.present();
		this.shoppingCartProvider.retrieveShoppingCart(sessionStorage.getItem("customerId")).subscribe(
			response => {
				this.cartItems = response.items;
				this.totalPrice = response.subTotal;
				if (Object.keys(this.cartItems).length == 0){
					this.nothing = true;
					console.log("nothing");
				}
				loading.dismiss();
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				loading.dismiss();
			}
		);
	}
	}	

	ionViewDidEnter() {
		

		console.log('ionViewDidEnter ShoppingCartPage');
		let idString = sessionStorage.getItem("customerId");
		if (sessionStorage.getItem("isLogin")!="true"){
			this.doAlert();
		}else{
			let loading = this.loadingCtrl.create({
			content: 'Loading...'
		});
		loading.present();
		this.shoppingCartProvider.retrieveShoppingCart(sessionStorage.getItem("customerId")).subscribe(
			response => {
				this.cartItems = response.items;
				this.totalPrice = response.subTotal;
				if (Object.keys(this.cartItems).length == 0){
					this.nothing = true;
					console.log("nothing");
				}
				loading.dismiss();
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				loading.dismiss();
			}
		);
	}
	}	
  	doAlert() {
		let alert = this.alertCtrl.create({
		  title: "You haven't login!",
		  buttons: [
		  {
		  	text:"Visitor",
		  	handler:() => {
				this.navCtrl.setRoot(CategoriesPage);
		  	}
		  },
		  {
		  		text:"Login",
		  		handler:() => {
		  			this.navCtrl.setRoot(HelloIonicPage);
		  		}
		  }
		  ]
		});
		alert.present();
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
