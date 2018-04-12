import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectSchedulePage } from '../select-schedule/select-schedule';
// import { Address } from '../../entities/address'

/**
 * Generated class for the SelectAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-address',
  templateUrl: 'select-address.html',
})
export class SelectAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
	addresses: Array<string> = [
		'UTown',
		'Siglap',
		'PGP'
	];

  addressSelected(address: string) {
	var isChecked = e.currentTarget.checked;
    console.log("Selected Address", address);
	console.log(this.checked);//it is working !!!
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAddressPage');
  }
	selectSchedule(event){
	  this.navCtrl.push(SelectSchedulePage, {fromPage: 'SelectAddressPage'});
  }
}
