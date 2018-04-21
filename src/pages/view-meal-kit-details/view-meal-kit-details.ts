import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MealKitProvider } from '../../providers/meal-kit/meal-kit';
import { CustomerProvider } from '../../providers/customer/customer';

import { Customer } from '../../entities/customer'
import { MealKit } from '../../entities/mealkit';
/**
 * Generated class for the ViewMealKitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-meal-kit-details',
  templateUrl: 'view-meal-kit-details.html',
})
export class ViewMealKitDetailsPage {
	errorMessage: string;
	infoMessage: string;
	mealKitToViewId: number;
	mealKitToView: MealKit;
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
				public mealKitProvider: MealKitProvider, public customerProvider: CustomerProvider)
  {
	  	this.mealKitToView = null;
		//this.mealKitToViewId = 1;
		this.mealKitToViewId = navParams.get('mealKitToViewId');	
		let customerIdInString: string = sessionStorage.getItem("customerId");
		this.customerId = Number(customerIdInString);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMealKitDetailsPage');
		
    this.mealKitProvider.retrieveMealKit(this.mealKitToViewId).subscribe(
	response => {
				this.mealKitToView = response.mealKit;
				this.infoMessage = "Mealkit loaded successfully";								
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
			
		);	
  }
  
  
  ionViewWillEnter()
	{
		this.mealKitProvider.retrieveMealKit(this.mealKitToViewId).subscribe(
			response => {
				this.mealKitToView = response.mealKit;
				this.infoMessage = "Mealkit loaded successfully";								
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
