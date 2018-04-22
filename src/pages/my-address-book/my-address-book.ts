import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { CategoriesPage } from '../categories/categories';

import { NavController, NavParams } from 'ionic-angular';

import { AddressProvider } from '../../providers/address/address';

import { Address } from '../../entities/address'
// import { Order } from '../../entities/order'

import { CreateNewAddressPage } from '../create-new-address/create-new-address';

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

	customerId: number;
	addresses: Address[];
	
	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public alertCtrl:AlertController,
				public addressProvider: AddressProvider) {
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
				this.infoMessage = "(Load) Addresses loaded successfully: " + response.message + ", result is: "+ response.result;								
			},
			error => {				
				this.errorMessage = "(Load) HTTP " + error.status + ": " + error.error.message;
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
	
}
