import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Customer } from '../../entities/customer';
import { LoginProvider } from '../../providers/login/login';
import { AddressProvider } from '../../providers/address/address';
import { CustomerProvider } from '../../providers/customer/customer';
import { MealKitProvider } from '../../providers/meal-kit/meal-kit';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  	submitted: boolean;
	isLogin: boolean;
	
	customer: Customer;
	customerId: number;
	fullName: string;
	
	username: string;
	password: string;
	errorMessage: string;
	infoMessage: string;
	
	constructor(public navCtrl: NavController,
				public alertCtrl: AlertController,
				public toastCtrl: ToastController,
				public loginProvider: LoginProvider,
				public addressProvider: AddressProvider,
				public customerProvider: CustomerProvider,
				public mealKitProvider: MealKitProvider)
	{
		this.submitted = false;
		this.isLogin = false;
	}
	
	ionViewDidLoad()
	{
		console.log('ionViewDidLoad HomePage');
		
		if(sessionStorage.getItem("isLogin") === "true")
		{
			this.isLogin = true;
		}
		
		this.fullName = sessionStorage.getItem("fullName")
	}
	
	
	
	clear()
	{
		this.username = "";
		this.password = "";
		this.errorMessage = "";
		this.infoMessage = "";
	}
	
	
	login(loginForm: NgForm)
	{
		this.submitted = true;
		
		if (loginForm.valid) 
		{
			this.loginProvider.setLoginCredential(this.username, this.password);
			
			this.loginProvider.login(this.username, this.password).subscribe(
				response => {
					this.customer = response.customer;
					this.infoMessage = "Customer login successfully";
			
					sessionStorage.setItem("customerId", this.customer.customerId);
					sessionStorage.setItem("fullName", this.customer.fullName);
					sessionStorage.setItem("isLogin", "true");
					this.customerId = this.customer.customerId;
					this.fullName = this.customer.fullName;
					this.isLogin = true;
					this.customerProvider.setLoginCredential(this.username, this.password);
			
					let toast = this.toastCtrl.create(
					{
						message: 'Welcome back ' + this.fullName,
						cssClass: 'toast',
						duration: 3000
					});
				
					toast.present();
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.message + ", Result is: " + error.error.result;
					let alert = this.alertCtrl.create(
					{
						title: 'Login',
						subTitle: 'Invalid login credential: ' + this.errorMessage,
						buttons: ['OK']
					});
				
					alert.present();
				}
			);	
		}
		else
		{
						
		} 
	}
}

