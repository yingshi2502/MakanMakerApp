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
	}
	
	
	login(loginForm: NgForm)
	{
		this.submitted = true;
		
		if (loginForm.valid) 
		{

			/*
			if((this.username == "manager" || this.username == "cashier1" || this.username == "cashier2") &&
				(this.password == "password"))
			{				
				if(this.username == "manager")
				{
					this.fullName = "Manager";			
				}
				else if(this.username == "cashier1")
				{
					this.fullName = "Cashier1";
				}
				else if(this.username == "cashier2")
				{
					this.fullName = "Cashier2";
				}
				
				this.isLogin = true;
				
				sessionStorage.setItem("firstName", this.firstName);
				sessionStorage.setItem("lastName", this.lastName);				
				sessionStorage.setItem("isLogin", "true");
				
			*/
			
			this.loginProvider.login(this.username, this.password).subscribe(
				response => {
					this.customer = response.customer;
					this.customerId = response.customer.customerId;
					this.fullName = response.customer.fullName; 
					this.isLogin = true;
					this.infoMessage = "Customer " + response.customer.customerId + " login successfully";
					
					this.loginProvider.setLoginCredential(this.username, this.password);
					this.addressProvider.setLoginCredential(this.username, this.password);
					this.customerProvider.setLoginCredential(this.username, this.password);
			
					sessionStorage.setItem("fullName", this.fullName);
					sessionStorage.setItem("isLogin", "true");
			
					let toast = this.toastCtrl.create(
					{
						message: 'Welcome back ' + this.customer.fullName,
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

