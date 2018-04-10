import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { CustomerProvider } from '../../providers/customer/customer';

import { Customer } from '../../entities/customer'
// import { Address } from '../../entities/address'
// import { Order } from '../../entities/order'


/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

	errorMessage: string;
	infoMessage: string;
	customerId: number;
	customer: Customer;
	customerDob: Date;
	
	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public actionSheetCtrl: ActionSheetController,
				public alertCtrl: AlertController,
				public toastCtrl: ToastController,
				public customerProvider: CustomerProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyProfilePage');
	}
  
	ionViewWillEnter()
	{
/* 		this.customerProvider.getCustomerByCustomerId(this.customerId).subscribe(
			response => {
				this.customer = response.customerEntity;
				this.customerDob = this.customer.dateOfBirth;
				this.infoMessage = "Customer profile loaded successfully";								
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
 */		
		error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
		}
	}

}
