import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Address } from '../../entities/address';
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
