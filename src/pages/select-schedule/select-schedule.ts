import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { SelectAddressPage } from '../select-address/select-address';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
import { MyProfilePage } from '../my-profile/my-profile';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SelectSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-schedule',
  templateUrl: 'select-schedule.html',
})
export class SelectSchedulePage {
	mealKits = [];
	cartWrappers=[];
	//deliveryDate;
	isEnabled=false;
	selectedAddress;
	errorMessage: string;
	infoMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
	  this.mealKits = navParams.get('param1');
	  this.selectedAddress = navParams.get('param2');
	  for (let mealKit of this.mealKits){
		  let cartWrapper = {mealKit, deliveryDate: new Date().toISOString(), specialRequest:""};
		  this.cartWrappers.push(cartWrapper);
	  }
  }
  /*public event = {
    month: '2018-05-19',
    timeStarts: '07:43',
    timeEnds: '2020-02-20'
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectSchedulePage');
	console.log("cart wrapper size"+Object.keys(this.cartWrappers).length);
	console.log("address id"+this.selectedAddress.addressId);
  }
	
	doAlert() {
		let alert = this.alertCtrl.create({
		  title: 'Your order has been prepared! Enjoy the comfort of MakanMaker at home!',
		  buttons: ['Ok']
		});
		this.isEnabled=true;
		
		console.log("specialRequest"+this.cartWrappers[0].specialRequest);
		
		alert.present();
	  }
	  
	  goToProfile(event){
	  this.navCtrl.push(MyProfilePage, {fromPage: 'SelectSchedulePage'});
  }
}
