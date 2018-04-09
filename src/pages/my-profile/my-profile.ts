import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

	errorMessage: string;
	infoMessage: string;
	customerId: number;
	customer: Customer;
	customerDob: Date;
	
	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public actionSheetCtrl: ActionSheetController,
				public alertCtrl: AlertController,
				public toastCtrl: ToastController,
				public productProvider: ProductProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyProfilePage');
	}
  
	ionViewWillEnter()
	{
		this.customerProvider.getCustomerByCustomerId(this.customerId).subscribe(
			response => {
				this.customer = response.customerEntity;
				this.customerDob = this.customer.dateOfBirth;
				this.infoMessage = "Customer profile loaded successfully";								
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}

}
