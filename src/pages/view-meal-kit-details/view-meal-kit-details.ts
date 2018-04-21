import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MealKitProvider } from '../../providers/meal-kit/meal-kit';
import { CustomerProvider } from '../../providers/customer/customer';
import { ShoppingCartProvider } from '../../providers/shopping-cart/shopping-cart';
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
	mealKitIdInString: string='';
	mealKitToView: MealKit;
	customerId: number;
	customerIdString: string;
	customer: Customer;
	fullName: string;
	dateOfBirth: Date;
	email: string;
	gender: string;
	mobile: string;
	qty:string="";	
	

	
  constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public alertCtrl: AlertController,
				public mealKitProvider: MealKitProvider, 
				public customerProvider: CustomerProvider, 
				public shoppingCartProvider: ShoppingCartProvider)
  {
	  	this.mealKitToView = null;
		//this.mealKitToViewId = 1;
		this.mealKitToViewId = navParams.get('mealKitToViewId');	
		let customerIdInString: string = sessionStorage.getItem("customerId");
		this.customerIdString = customerIdInString; //this will be used for addItem
		this.customerId = Number(customerIdInString);
		this.mealKitIdInString = ''+this.mealKitToViewId.toString();
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
	  
	this.shoppingCartProvider.addItem(this.customerIdString, this.mealKitIdInString, this.qty).subscribe(
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
}
