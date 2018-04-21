import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { AddressProvider } from '../../providers/address/address';

import { Address } from '../../entities/address'

/**
 * Generated class for the CreateNewAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-new-address-book',
  templateUrl: 'create-new-address.html',
})
export class CreateNewAddressPage {

	// for debugging purposes
	errorMessage: string;
	infoMessage: string;
	submitted: boolean;

	customerId: number;
	address: Address;
	
	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public addressProvider: AddressProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidEnter CreateNewAddressPage');
		this.customerId = sessionStorage.getItem("customerId");
		this.address = new Address();
	}
  
	ionViewDidEnter() {
		console.log('ionViewDidEnter CreateNewAddressPage');
		this.customerId = sessionStorage.getItem("customerId");
		this.address = new Address();
	}

	clear() {
		this.infoMessage = null;
		this.errorMessage = null;
		this.submitted = false;
		this.address = new Address();
	}

	create(createAddressForm) {
		this.submitted = true;
		
		this.infoMessage = null;
		this.errorMessage = null;
		
		if (createAddressForm.valid) 
		{		
			this.addressProvider.createAddress(this.address, this.customerId).subscribe(
				response => {
					this.infoMessage = "New address " + response.productId + " created successfully";
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				}
			);
		}
	}
	
}
