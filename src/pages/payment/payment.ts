import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectSchedulePage } from '../select-schedule/select-schedule';
import { AlertController } from 'ionic-angular';
import { SelectAddressPage } from '../select-address/select-address';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
 paymentMethods = [];
 public ppButtonsClicked: boolean = false;
 public ccButtonsClicked: boolean = false;
 public codButtonsClicked: boolean = false;
 mealKits=[];
 totalPrice: number;
 isEnabled=false;
 selectedAddress: Object = {};
 //selectedPayment;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
	  this.mealKits = navParams.get('param1');
	  this.selectedAddress = navParams.get('param2');
	  this.totalPrice = navParams.get('param3');
	this.paymentMethods = [
	{ 'name': 'PayPal',
	  'icon': 'pricetag'
	},
	{'name': 'Credit Card',
	  'icon': 'card'
	},
	{'name': 'Cash on Delivery',
	  'icon': 'cash'
	}
	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
	//console.log("selected postalCode"+this.selectedAddress.postalCode);
	console.log("mealkits size"+Object.keys(this.mealKits).length);
	
  }
  selectSchedule(event){
	  this.navCtrl.push(SelectSchedulePage, {param1:this.mealKits, param2: this.selectedAddress});
  }
  
  public onButtonClick(index) {
        switch(index){
			case 0: {
				this.ppButtonsClicked=!this.ppButtonsClicked; 
				this.ccButtonsClicked = false;
				this.codButtonsClicked = false;
				break;
				}
			case 1: {
				this.ccButtonsClicked=!this.ccButtonsClicked; 
				this.ppButtonsClicked = false;
				this.codButtonsClicked = false;
				break;
				}
			case 2: {
				this.codButtonsClicked=!this.codButtonsClicked; 
				this.ccButtonsClicked = false;
				this.ppButtonsClicked = false;
				break;
				}
			default: break;
		}
    }
	
	doAlert() {
		let alert = this.alertCtrl.create({
		  title: 'Your order has been confirmed.',
		  buttons: ['Ok']
		});
		this.isEnabled=true;
		
		alert.present();
	  }

}
