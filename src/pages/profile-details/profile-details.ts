import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { CustomerProvider } from '../../providers/customer/customer';

import { Customer } from '../../entities/customer'
// import { Address } from '../../entities/address'
// import { Order } from '../../entities/order'

import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
/**
 * Generated class for the ProfileDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {

	errorMessage: string;
	infoMessage: string;
	customerId: number;
	customerToUpdate: Customer;
	
	submitted: boolean;
	
	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public customerProvider: CustomerProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UpdateProductPage');
		
/*		this.customerId = navParams.get('customerToUpdateId'); */
		this.customerId = 1;
		this.submitted = false;

		this.customerProvider.getCustomerByCustomerId(this.customerId).subscribe(
			response => {
				this.customerToUpdate = response.customer;
				this.infoMessage = "Customer loaded successfully";								
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}
  
	ionViewWillEnter()
	{
		console.log('ionViewDidEnter ProfileDetailsPage');

		this.customerToUpdate = null;
/*		this.customerId = navParams.get('customerToUpdateId'); */
		
		this.submitted = false;

		this.customerId = 1;
 		this.customerProvider.getCustomerByCustomerId(this.customerId).subscribe(
			response => {
				this.customerToUpdate = response.customer;
				this.infoMessage = "Customer profile loaded successfully";								
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message + " I am here";
			}
		);

	}
	
	clear()
	{
		this.errorMessage = "";
		this.infoMessage = "";
	
		this.submitted = false;
	}
	
	saveProfile(editCustomerForm: NgForm) 
	{
		this.submitted = true;
		
		if (editCustomerForm.valid) 
		{		
			this.infoMessage = "Customer updated successfully";
			/*			this.productProvider.updateProduct(this.productToUpdate).subscribe(
				response => {					
					this.infoMessage = "Customer updated successfully";
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				}
			);*/

		}
		else
		{			
		}
	}

}
