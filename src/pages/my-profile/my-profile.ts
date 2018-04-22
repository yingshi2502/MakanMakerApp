import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { CustomerProvider } from '../../providers/customer/customer';

import { Customer } from '../../entities/customer'
// import { Address } from '../../entities/address'
// import { Order } from '../../entities/order'

import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
import { ProfileDetailsPage } from '../profile-details/profile-details';


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
	fullName: string;
	dateOfBirth: Date;
	email: string;
	gender: string;
	mobile: string;
	
	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public actionSheetCtrl: ActionSheetController,
				public alertCtrl: AlertController,
				public toastCtrl: ToastController,
				public customerProvider: CustomerProvider) {
		let customerIdInString: string = sessionStorage.getItem("customerId");
		this.customerId = Number(customerIdInString);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyProfilePage');
		this.customerProvider.getCustomerByCustomerId(this.customerId).subscribe(
			response => {
				this.customer = response.customer;
				console.log('ionViewWillEnter response MyProfilePage', this.customer.fullName);
				this.fullName = this.customer.fullName;
				this.dateOfBirth = this.customer.dateOfBirth;
				this.email = this.customer.email;
				this.mobile = this.customer.mobile;
				if (this.customer.gender==1){
					this.gender = "female"
				}else{
					this.gender = "male"
				}
				console.log('ionViewWillEnter response MyProfilePage');
				this.infoMessage = "Upon Load, Customer profile loaded successfully: " + response.message + ", result is: "+ response.result;								
			},
			error => {				
				this.errorMessage = "Upon Load, HTTP " + error.status + ": " + error.error.message + " I am here";
			}
		);
	}
  
	ionViewWillEnter()
	{
		console.log('ionViewDidLoad MyProfilePage');

		this.customerProvider.getCustomerByCustomerId(this.customerId).subscribe(
			response => {
				this.customer = response.customer;
				console.log('ionViewWillEnter response MyProfilePage');
				this.fullName = this.customer.fullName;
				this.dateOfBirth = this.customer.dateOfBirth;
				this.email = this.customer.email;
				this.mobile = this.customer.mobile;
				console.log('ionViewWillEnter response MyProfilePage');
				this.infoMessage = "Upon Enter, Customer profile loaded successfully: " + response.message + ", result is: "+ response.result;								
			},
			error => {				
				this.errorMessage = "Upon Enter, HTTP " + error.status + ": " + error.error.message + " I am here";
			}
		);
	}
	
	shoppingCart(event){
	  this.navCtrl.push(ShoppingCartPage, {fromPage: 'MyProfilePage'});
	}
	editProfile(event) {
		
		this.navCtrl.push(ProfileDetailsPage, {'customerToUpdateId': this.customerId});
	}
}
