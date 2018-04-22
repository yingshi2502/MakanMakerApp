import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
<<<<<<< HEAD
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { CategoriesPage } from '../categories/categories';
=======
import { ModalController } from 'ionic-angular';
>>>>>>> 4bff66e97c48b5ee1d380f3306f1d7d89a10e980

import { NavController, NavParams } from 'ionic-angular';

import { AddressProvider } from '../../providers/address/address';

import { Address } from '../../entities/address'
// import { Order } from '../../entities/order'

import { CreateNewAddressPage } from '../create-new-address/create-new-address';
import { EditAddressPage } from '../edit-address/edit-address';

import { ChooseShippingAddressPage } from '../choose-shipping-address/choose-shipping-address';
import { ChooseBillingAddressPage } from '../choose-billing-address/choose-billing-address';


/**
 * Generated class for the MyAddressBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-address-book',
  templateUrl: 'my-address-book.html',
})
export class MyAddressBookPage {

	// for debugging purposes
	errorMessage: string;
	infoMessage: string;

	chooseShippingAddressPage: ChooseShippingAddressPage;
	chooseBillingAddressPage: ChooseShippingAddressPage;

	customerId: number;
	shippingId: number;
	billingId: number;
	addressIdToUpdate: number;
	addressToUpdate: Address;
	addresses: Address[];
	
	constructor(public navCtrl: NavController,
				public navParams: NavParams,
<<<<<<< HEAD
				public alertCtrl:AlertController,
				public addressProvider: AddressProvider) {
=======
				public addressProvider: AddressProvider,
				public toastCtrl: ToastController,
				public alertCtrl: AlertController,
				public modalCtrl: ModalController) {
		this.chooseShippingAddressPage = null;
		this.chooseBillingAddressPage = null;
>>>>>>> 4bff66e97c48b5ee1d380f3306f1d7d89a10e980
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyAddressBookPage');
		this.customerId = parseInt(sessionStorage.getItem("customerId"));
		let idString = sessionStorage.getItem("customerId");
		if (sessionStorage.getItem("isLogin")!="true"){
			this.doAlert();
		}else{
			this.addressProvider.retrieveAddressesByCustomerId(Number(sessionStorage.getItem("customerId"))).subscribe(
			response => {
				this.addresses = response.addresses;
				console.log('ionViewWillLoad response.addresses retrieved MyProfilePage, addresses: ' + this.addresses);
				console.log('ionViewWillEnter response MyProfilePage');
				this.infoMessage = "(Load) Addresses loaded successfully: " + response.message + ", result is: "+ response.result;								
			},
			error => {				
				this.errorMessage = "(Load) HTTP " + error.status + ": " + error.error.message;
			}
		);
	}
	}
  
	ionViewDidEnter() {
		console.log('ionViewDidEnter MyAddressBookPage');
		this.customerId = parseInt(sessionStorage.getItem("customerId"));
		if (sessionStorage.getItem("isLogin")!="true"){
			this.doAlert();
		}else{
			this.addressProvider.retrieveAddressesByCustomerId(Number(sessionStorage.getItem("customerId"))).subscribe(
			response => {
				this.addresses = response.addresses;
				console.log('ionViewWillLoad response.addresses retrieved MyProfilePage, addresses: ' + this.addresses);
				console.log('ionViewWillEnter response MyProfilePage');
<<<<<<< HEAD
				this.infoMessage = "(Load) Addresses loaded successfully: " + response.message + ", result is: "+ response.result;								
			},
			error => {				
				this.errorMessage = "(Load) HTTP " + error.status + ": " + error.error.message;
=======
				this.infoMessage = "Addresses loaded successfully: " + response.message + ", result is: "+ response.result;	
				let toast = this.toastCtrl.create(
					{
						message: this.addresses.length + ' Address(es) Loaded Successfully',
						cssClass: 'toast',
						duration: 3000
					});
				
				toast.present();
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				let alert = this.alertCtrl.create(
					{
						title: 'My Address Book',
						subTitle: 'An error occurred while retrieving your addresses: ' + this.errorMessage,
						buttons: ['OK']
					});
				
				alert.present();
>>>>>>> 4bff66e97c48b5ee1d380f3306f1d7d89a10e980
			}
		);
		}
	}


	doAlert() {
		let alert = this.alertCtrl.create({
		  title: "You haven't login!",
		  buttons: [
		  {
		  	text:"Visitor",
		  	handler:() => {
				this.navCtrl.setRoot(CategoriesPage);
		  	}
		  },
		  {
		  		text:"Login",
		  		handler:() => {
		  			this.navCtrl.setRoot(HelloIonicPage);
		  		}
		  }
		  ]
		});
		alert.present();
	}

	createNewAddress(event) {
		console.log('createNewAddress MyAddressBookPage');
		this.navCtrl.push(CreateNewAddressPage, {fromPage: 'MyAddressBookPage'});
	}
	
	editAddress(event, addressId: number) {
		console.log('editAddress MyAddressBookPage');
		this.navCtrl.push(EditAddressPage, {fromPage: 'MyAddressBookPage', 'addressToEditId': addressId});
	}

	setShippingId(shippingId: number) 
	{
			this.addressIdToUpdate = shippingId;
			this.addressProvider.getAddressByAddressId(shippingId).subscribe
			(
				response => 
				{
					this.addressToUpdate = response.address;
					console.log('setShippingId getAddressByAddressId MyAddressBook, message: ' + response.message + ", result: " + response.result);
					this.infoMessage = "Address " + response.message + ", result is: "+ response.result;
				},
				error => 
				{				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				}
			);
			this.addressProvider.setDetailsToUpdate(this.addressToUpdate.streetAddress, 
													this.addressToUpdate.floorUnit, 
													this.addressToUpdate.postalCode, 
													this.addressToUpdate.fullName, 
													this.addressToUpdate.phoneNumber, 
													true, 
													this.addressToUpdate.isDefaultBilling);
			this.addressProvider.updateAddress(this.customerId.toString(), this.shippingId.toString()).subscribe(
				response => 
				{
					console.log('setShippingId updateAddress MyAddressBook, message: ' + response.message + ", result: " + response.result);
					this.infoMessage = "Address " + response.message + ", result is: "+ response.result;	
					let toast = this.toastCtrl.create
					(
						{
							message: 'Your Shipping Address Is Updated Successfully',
							cssClass: 'toast',
							duration: 3000
						}
					);
				toast.present();
				},
				error => 
				{				
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
					let alert = this.alertCtrl.create(
					{
						title: 'My Address Book',
						subTitle: 'An error occurred while updating your shipping address: ' + this.errorMessage,
						buttons: ['OK']
					});
					alert.present();
				}
			);
	}
/*
	setBillingId(billingId: number, chooseBillingAddForm: NgForm) 
	{
		if(chooseBillingAddForm.valid)
		{
		this.addressIdToUpdate = billingId;
		this.addressProvider.getAddressByAddressId(billingId).subscribe(
			response => 
			{
				this.addressToUpdate = response.address;
				console.log('setBillingId getAddressByAddressId MyAddressBook, message: ' + response.message + ", result: " + response.result);
				this.infoMessage = "Address " + response.message + ", result is: "+ response.result;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
		this.addressProvider.setDetailsToUpdate(this.addressToUpdate.streetAddress, this.addressToUpdate.floorUnit, this.addressToUpdate.postalCode, this.addressToUpdate.fullName, this.addressToUpdate.phoneNumber, this.addressToUpdate.isDefaultShipping, true);
		this.addressProvider.updateAddress(this.customerId, shippingId).subscribe(
			response =>
			{
				console.log('setBillingId updateAddress MyAddressBook, message: ' + response.message + ", result: " + response.result);
				this.infoMessage = "Address " + response.message + ", result is: "+ response.result;	
				let toast = this.toastCtrl.create(
				{
					message: 'Your Shipping Address Is Updated Successfully',
					cssClass: 'toast',
					duration: 3000
				});
				
			toast.present();
			},
			error => 
			{				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				let alert = this.alertCtrl.create(
					{
						title: 'My Address Book',
						subTitle: 'An error occurred while updating your billing address: ' + this.errorMessage,
						buttons: ['OK']
					});
				
				alert.present();
			}
		);
		}
	}
*/
}
