import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  	submitted: boolean;
	isLogin: boolean;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	
	
	
	constructor(public navCtrl: NavController,
				public alertCtrl: AlertController,
				public toastCtrl: ToastController)
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
		
		this.firstName = sessionStorage.getItem("firstName")
		this.lastName = sessionStorage.getItem("lastName")
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
			if((this.username == "manager" || this.username == "cashier1" || this.username == "cashier2") &&
				(this.password == "password"))
			{				
				if(this.username == "manager")
				{
					this.firstName = "Manager";			
				}
				else if(this.username == "cashier1")
				{
					this.firstName = "Cashier1";
				}
				else if(this.username == "cashier2")
				{
					this.firstName = "Cashier2";
				}
				
				this.lastName = "Default";
				this.isLogin = true;
				
				sessionStorage.setItem("firstName", this.firstName);
				sessionStorage.setItem("lastName", this.lastName);				
				sessionStorage.setItem("isLogin", "true");
				
				//this.productProvider.setLoginCredential(this.username, this.password);
				
				let toast = this.toastCtrl.create(
				{
					message: 'Welcome back ' + this.firstName + ' ' + this.lastName,
					cssClass: 'toast',
					duration: 3000
				});
				
				toast.present();
			}
			else
			{
				let alert = this.alertCtrl.create(
				{
					title: 'Login',
					subTitle: 'Invalid login credential',
					buttons: ['OK']
				});
				
				alert.present();			
			}
		}
		else
		{
		}
	}
}
