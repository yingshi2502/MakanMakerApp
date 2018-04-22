import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { AddressProvider } from '../../providers/address/address';

import { Address } from '../../entities/address'

/**
 * Generated class for the EditAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html',
})
export class EditAddressPage {

	isSubmitted: false;
	customerId: number;
	addressId: number;
	address = new Address();
	
	infoMessage = "";
	errorMessage = "";

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public alertCtrl: AlertController,
				public toastCtrl: ToastController, 
				public addressProvider: AddressProvider) {
		this.customerId = parseInt(sessionStorage.getItem("customerId"));
		this.addressId = navParams.get('addressToEditId');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditAddressPage');
		this.customerId = parseInt(sessionStorage.getItem("customerId"));
		this.addressProvider.getAddressByAddressId(this.addressId).subscribe (
			response => {
				this.address = response.address;
				console.log('ionViewWillLoad response.address retrieved EditAddressPage, addresses: ' + this.address);
				this.infoMessage = "(Load) Address loaded successfully: " + response.message + ", result is: "+ response.result;
				let toast = this.toastCtrl.create(
					{
						message: 'Address with address ID ' + this.address.addressId + ' Loaded Successfully',
						cssClass: 'toast',
						duration: 3000
					});
				
				toast.present();				
			},
			error => {				
				this.errorMessage = "(Load) HTTP " + error.status + ": " + error.error.message;
				let alert = this.alertCtrl.create(
					{
						title: 'My Address Book',
						subTitle: 'An error occurred while retrieving your address: ' + this.errorMessage,
						buttons: ['OK']
					});
				
				alert.present();
			}
		)
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter EditAddressPage');
		this.customerId = parseInt(sessionStorage.getItem("customerId"));
		this.addressProvider.getAddressByAddressId(this.addressId).subscribe (
			response => {
				this.address = response.address;
				console.log('ionViewWillLoad response.address retrieved EditAddressPage, addresses: ' + this.address);
				this.infoMessage = "(Load) Address loaded successfully: " + response.message + ", result is: "+ response.result;
				let toast = this.toastCtrl.create(
					{
						message: 'Address with address ID ' + this.address.addressId + ' Loaded Successfully',
						cssClass: 'toast',
						duration: 3000
					});
				
				toast.present();				
			},
			error => {				
				this.errorMessage = "(Load) HTTP " + error.status + ": " + error.error.message;
				let alert = this.alertCtrl.create(
					{
						title: 'My Address Book',
						subTitle: 'An error occurred while retrieving your address: ' + this.errorMessage,
						buttons: ['OK']
					});
				
				alert.present();
			}
		)
	}
	
	saveAddress(editAddressForm) { 
		console.log('saveAddress ProfileDetailsPage');

		this.submitted = true;

		if (editAddressForm.valid) 
		{		
			this.addressProvider.setDetailsToUpdate(this.address.streetAddress, this.address.floorUnit, this.address.postalCode, this.address.fullName, this.address.phoneNumber, this.address.isDefaultShipping, this.address.isDefaultBilling).subscribe(
				response => {		
					console.log('saveAddress EditAddressPage');
					this.infoMessage = "Customer updated successfully";
					let toast = this.toastCtrl.create
					(
						{
							message: 'Your Address Is Updated Successfully',
							cssClass: 'toast',
							duration: 3000
						}
					);
					toast.present();
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message + error.message;
					let alert = this.alertCtrl.create
					(
						{
							title: 'Edit Address',
							subTitle: 'An error occurred while updating your address: ' + this.errorMessage,
							buttons: ['OK']
						}
					);
					alert.present();
				}
			);

		}
		else
		{			
		}
	}

}
