import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'

import { CustomerProvider } from '../../providers/customer/customer';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Customer } from '../../entities/customer'
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  fullName: string;
  email: string;
  mobile: string;
  gender: number;
  customerDobString: string;
  customer: Customer;
  infoMessage: string;
  errorMessage: string;
  newCustomer: Customer;
  username: string;
  password: string="";
  repassword: string="";
  customerId : number;
  isLogin:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public customerProvider: CustomerProvider,				
  	public alertCtrl: AlertController,

  	public toastCtrl: ToastController) {
  	this.newCustomer = new Customer();
  	this.customer = new Customer();
  	this.password = "";
  	this.repassword = "";
  	this.customerDobString ="";
  }
ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
this.newCustomer = new Customer();
  	this.password = "";
  	this.repassword = "";
  	this.customerDobString ="";
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SignupPage');
   this.newCustomer = new Customer();
  	this.password = "";
  	this.repassword = "";
  	this.customerDobString ="";
  }


  selectGender(g:number){
  	this.newCustomer.gender = g;
  }
  clear(){
  	this.newCustomer = new Customer();
  	this.password = "";
  	this.repassword = "";
  	this.customerDobString = "";
  	this.infoMessage = null;
  	this.errorMessage = null;
  }
  createProfile(newCustomerForm: NgForm){
  	console.log('saveProfile ProfileDetailsPage');
  	console.log('dob string'+this.customerDobString);
  		if (this.password != this.repassword){
  			let toast = this.toastCtrl.create(
					{
						message: 'Password does not match',
						cssClass: 'toast',
						duration: 3000
					});
				
					toast.present();
  		}else{

		if (newCustomerForm.valid) 
		{		

			this.newCustomer.password = this.password;
			this.newCustomer.dateOfBirth = new Date();
			this.customerProvider.signup2(this.newCustomer,this.customerDobString).subscribe(
				response => {		

					if (response.result == true){
						this.infoMessage = "Customer created successfully";
					this.customer = response.customer;
					sessionStorage.setItem("customerId", (this.customer.customerId).toString());
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
					this.navCtrl.popToRoot() ;
					//this.navCtrl.push(HelloIonicPage, {fromPage: 'SignupPage'})
				}else{
					this.clear();
					let alert = this.alertCtrl.create(
					{
						title: 'Sign Up Failed',
						subTitle: response.message,
						buttons: ['Reset']
					});
					alert.present();
					newCustomerForm.reset();
				}

					
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message + error.message;
					let alert = this.alertCtrl.create(
					{
						title: 'Login',
						subTitle: 'Invalid login credential: ' + this.errorMessage,
						buttons: [
							{
								text:"Reset",
								handler: data => {
									this.clear();
								}
							}
						]
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

}
