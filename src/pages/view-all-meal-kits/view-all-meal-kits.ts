import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViewMealKitDetailsPage} from '../view-meal-kit-details/view-meal-kit-details';
import { MealKitProvider } from '../../providers/meal-kit/meal-kit';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
import { MealKit } from '../../entities/mealKit';
/**
 * Generated class for the ViewAllMealKitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-all-meal-kits',
  templateUrl: 'view-all-meal-kits.html',
})
export class ViewAllMealKitsPage {
	infoMessage: string;
	errorMessage: string;
	mealKits: MealKit[];
	qty:string="";
	customerId: number;
	customerIdString: string;
	mealKitIdInString: string='';
	
	
  constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public alertCtrl: AlertController,
				public mealKitProvider: MealKitProvider,
				public shoppingCartProvider: ShoppingCartProvider)
 {
	
		let customerIdInString: string = sessionStorage.getItem("customerId");
		this.customerIdString = customerIdInString; //this will be used for addItem
		this.customerId = Number(customerIdInString);
 
  }

  
  ionViewDidLoad() {
	/*console.log('ionViewDidLoad ViewAllMealKitsPage');
		this.mealKitProvider.retrieveAllMealKits().subscribe(
			response => {
				this.mealKits = response.mealKits
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
	);*/
	
  }
  
    ionViewDidEnter() {
		console.log('ionViewDidEnter ViewAllMealKitsPage');
		this.mealKitProvider.retrieveAllMealKits().subscribe(
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
	this.shoppingCartProvider.addItem(this.customerIdString, this.mealKitIdInString, "1").subscribe(
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
  
    doWishListAlert(mealKit) {
		this.mealKitIdInString = '' + mealKit.mealKitId.toString();  
		this.shoppingCartProvider.addWishList(this.customerIdString, this.mealKitIdInString).subscribe(
			response => {						
				this.infoMessage = "Added to wishing list successfully";
				this.errorMessage = null;
			},
			error => {				
				this.infoMessage = null;
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);		
		
		
		let alert = this.alertCtrl.create({
		  title: 'Added to Wishlist!',
		  subTitle: 'Item has been added to Wishlist successfully!',
		  buttons: ['OK']
		});
		alert.present();
   }  
   
  	viewMealKitDetails(event, mealKit) 
	{
		this.navCtrl.push(ViewMealKitDetailsPage, {'mealKitToViewId': mealKit.mealKitId});
	}

}


