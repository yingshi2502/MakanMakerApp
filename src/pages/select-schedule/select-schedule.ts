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
	orders=[];
	//deliveryDate;
	isEnabled=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
	  this.mealKits = navParams.get('param1');
	  for (let mealKit of this.mealKits){
		  let order = {mealKit, deliveryDate: '2018-05-19'};
		  this.orders.push(order);
	  }
  }
  /*public event = {
    month: '2018-05-19',
    timeStarts: '07:43',
    timeEnds: '2020-02-20'
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectSchedulePage');
	console.log("orders size"+Object.keys(this.orders).length);
  }
	
	doAlert() {
		let alert = this.alertCtrl.create({
		  title: 'Your order has been prepared! Enjoy the comfort of MakanMaker at home!',
		  buttons: ['Ok']
		});
		this.isEnabled=true;
		
		alert.present();
	  }
	  
	  goToProfile(event){
	  this.navCtrl.push(MyProfilePage, {fromPage: 'SelectSchedulePage'});
  }
}
