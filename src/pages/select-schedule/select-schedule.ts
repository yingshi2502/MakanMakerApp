import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { SelectAddressPage } from '../select-address/select-address';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart';
import { MyProfilePage } from '../my-profile/my-profile';
import { AlertController } from 'ionic-angular';
//import { Moment } as moment from 'moment';

import { CheckoutProvider } from '../../providers/checkout/checkout';
import { Order } from '../../entities/order'
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
	customerId: number;
	mealKits = [];
	cartWrappers=[];
	//deliveryDate;
	isEnabled=false;
	selectedAddress;
	errorMessage: string;
	infoMessage: string;
	allSuccess: false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public alertCtrl: AlertController, public checkoutProvider: CheckoutProvider,) {
	  let today = new Date().toString();
	  let customerIdInString: string = sessionStorage.getItem("customerId");
	  this.customerId = Number(customerIdInString);
	  this.mealKits = navParams.get('param1');
	  this.selectedAddress = navParams.get('param2');
	  for (let mealKit of this.mealKits){
		  let cartWrapper = {mealKit, deliveryDate: today, specialRequest:""};
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
	console.log("customer"+this.customerId);
	console.log("date"+this.cartWrappers[0].deliveryDate);
	console.log("selected postalCode"+this.selectedAddress.postalCode);
	console.log("mealkits size"+Object.keys(this.mealKits).length);
	console.log("cart wrapper size"+Object.keys(this.cartWrappers).length);

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
	  
	  createOrder(){
		  for (let cartWrapper of this.cartWrappers){
			  //cartWrapper.deliveryDate = moment().format('DDMMYYYY');
			  console.log("date"+cartWrapper.deliveryDate);
			  this.checkoutProvider.createOrder(this.customerId, cartWrapper.deliveryDate, cartWrapper.mealKit.mealKitId, cartWrapper.specialRequest, cartWrapper.mealKit.quantity, this.selectedAddress.addressId).subscribe(
				response => {					
						this.infoMessage = "New order " + response.message;
						console.log(this.infoMessage);
						this.allSuccess=true;
					},
					error => {
						this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
						console.log(this.errorMessage);
						this.allSuccess=false
					}
			  );
		  }
		  if (this.allSuccess=true){this.doAlert();}
	  }
	  
	  goToProfile(event){
	  this.navCtrl.push(MyProfilePage, {fromPage: 'SelectSchedulePage'});
  }
}
