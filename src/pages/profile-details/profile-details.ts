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
		this.customerId = navParams.get('customerToUpdateId');

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProfileDetailsPage');
		
		this.customerToUpdate = null;		

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
		this.submitted = false;

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
	
	ionViewDidLeave()
	{
		console.log('ionViewDidLeave ProfileDetailsPage');
		
		this.customerProvider.setDetailsToUpdate(null, null, -1, null, null);
	}
	
	saveProfile(editCustomerForm: NgForm) 
	{
		console.log('saveProfile ProfileDetailsPage');

		this.submitted = true;

		if (editCustomerForm.valid) 
		{		
			// replace the hardcoded date with "this.customerToUpdate.dateOfBirth"
			this.customerProvider.setDetailsToUpdate(this.customerToUpdate.fullName, this.customerToUpdate.email,this.customerToUpdate.gender, "07/31/1997", this.customerToUpdate.mobile);
			this.customerProvider.updateCustomer(this.customerToUpdate).subscribe(
				response => {					
					this.infoMessage = "Customer updated successfully";
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message + error.message;
				}
			);

		}
		else
		{			
		}
	}
}
