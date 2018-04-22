import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'

import { NavController, NavParams } from 'ionic-angular';

import { CustomerProvider } from '../../providers/customer/customer';

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

	customerId: number;
	addressId: number;
	address: Address;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditAddressPage');
		this.customerId = parseInt(sessionStorage.getItem("customerId"));
		this.address = null;
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter EditAddressPage');
		this.customerId = parseInt(sessionStorage.getItem("customerId"));
		this.address = null;
	}

}
