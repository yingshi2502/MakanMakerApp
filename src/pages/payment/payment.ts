import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectSchedulePage } from '../select-schedule/select-schedule';
import { AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
  }
  selectSchedule(event){
	  this.navCtrl.push(SelectSchedulePage, {fromPage: 'SelectAddressPage'});
  }
  
  public onButtonClick(index) {
        switch(index){
			case 0: this.ppButtonsClicked=!this.ppButtonsClicked; break;
			case 1: this.ccButtonsClicked=!this.ccButtonsClicked; break;
			case 2: this.codButtonsClicked=!this.codButtonsClicked; break;
			default: break;
		}
    }
	
	doAlert() {
		let alert = this.alertCtrl.create({
		  title: 'Your order has been paid. Enjoy the comfort of MakanMaker at home!',
		  buttons: ['Ok']
		});

		alert.present();
	  }

}
