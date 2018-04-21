import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViewMealKitDetailsPage} from '../view-meal-kit-details/view-meal-kit-details';
import { CustomerProvider } from '../../providers/customer/customer';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { MealKitProvider } from '../../providers/meal-kit/meal-kit';
import { MealKit } from '../../entities/mealkit';
import { Customer } from '../../entities/customer'

/**
 * Generated class for the WishListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish-list.html',
})
export class WishListPage {
	//viewMealKitDetails = ViewMealKitDetailsPage;
	infoMessage: string;
	errorMessage: string;
	mealKits: MealKit[]; 
	customerId: string;
	customer: Customer;
	mealKitIdInString: string='';
	customerIdString: string;
	
	constructor(public navCtrl: NavController, 
			public navParams: NavParams, 
			public alertCtrl: AlertController,
			public customerProvider: CustomerProvider,
			public shoppingCartProvider: ShoppingCartProvider,
			public mealKitProvider: MealKitProvider) {
			
			let customerIdInString: string = sessionStorage.getItem("customerId");
			this.customerId = customerIdInString; 

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishListPage');
	}
  
  
	ionViewDidEnter() {
		console.log('ionViewDidEnter ViewAllMealKitsPage');
		this.shoppingCartProvider.retrieveWishListByCustomerId(this.customerId).subscribe(
			response => {
				this.mealKits = response.mealKits
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}
  
  
	 doAlert(mealKit) {
		this.mealKitIdInString = '' + mealKit.mealKitId.toString();  
		this.shoppingCartProvider.addItem(this.customerId, this.mealKitIdInString, "1").subscribe(
			response => {						
				this.infoMessage = "Added to shopping cart successfully";
				this.errorMessage = null;
			},
			error => {				
				this.infoMessage = null;
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);	
		
		let alert = this.alertCtrl.create({
		  title: 'Added to Cart!',
		  subTitle: 'Item has been added to Cart successfully!',
		  buttons: ['OK']
		});
		alert.present();		

	  }	

  	viewMealKitDetails(event, mealKit) 
	{
		this.navCtrl.push(ViewMealKitDetailsPage, {'mealKitToViewId': mealKit.mealKitId});
	}	
  
}
