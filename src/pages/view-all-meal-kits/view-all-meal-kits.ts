import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViewMealKitDetailsPage} from '../view-meal-kit-details/view-meal-kit-details';
import { MealKitProvider } from '../../providers/meal-kit/meal-kit';
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
	errorMessage: string;
	mealKits: MealKit[];
	

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController
  , public mealKitProvider: MealKitProvider) {
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

  
    doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Added to Cart!',
      subTitle: 'Item has been added to Cart successfully!',
      buttons: ['OK']
    });
    alert.present();
  }
  
    doWishListAlert() {
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


