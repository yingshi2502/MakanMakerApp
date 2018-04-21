import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViewMealKitDetailsPage} from '../view-meal-kit-details/view-meal-kit-details';
import { CustomerProvider } from '../../providers/customer/customer';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
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
	viewMealKitDetails = ViewMealKitDetailsPage;
	errorMessage: string;
	mealKits: MealKit[];
	customerId: number;
	customer: Customer;
	
	constructor(public navCtrl: NavController, 
			public navParams: NavParams, 
			public alertCtrl: AlertController,
			public customerProvider: CustomerProvider) {
				
				let customerIdInString: string = sessionStorage.getItem("customerId");
				this.customerId = Number(customerIdInString); 

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishListPage');
	}
  
  
	ionViewDidEnter() {
		console.log('ionViewDidEnter ViewAllMealKitsPage');
		this.mealKitProvider.retrieveWishListByCustomerId(customerIdInString).subscribe(
			response => {
				this.mealKits = response.mealKits
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}
  

    doAlert() {
		let alert = this.alertCtrl.create({
		  title: 'Added to Cart!',
		  subTitle: 'Item has been added to Cart successfully!',
		  buttons: ['OK']
		});
		alert.present();
    }  
  
}
