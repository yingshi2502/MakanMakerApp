import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'

import { CustomerProvider } from '../../providers/customer/customer';

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


  fullname: string;
  email: string;
  mobile: string;
  gender: number;
  customerDobString: string;
  infoMessage: string;
  errorMessage: string;
  newCustomer: Customer;
  username: string;
  password: string="";
  repassword: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public customerProvider: CustomerProvider,
  	public toastCtrl: ToastController) {
  	this.newCustomer = new Customer();
  	this.password = "";
  	this.repassword = "";
  	this.customerDobString ="";
  }
//@QueryParam("username") String username, @QueryParam("password") String password, 
//@QueryParam("fullName") String fullName, @QueryParam("mobile") String mobile,
// @QueryParam("email") String email, @QueryParam("dob") String dob, @QueryParam("gener") String gender
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

  createProfile(newCustomerForm: NgForm){
  	console.log('saveProfile ProfileDetailsPage');
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

			this.newCustomer.gender = 1;
			this.newCustomer.dateOfBirth = new Date();
			this.customerProvider.signup(this.newCustomer).subscribe(
				response => {					
					this.infoMessage = "Customer created successfully";
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message + error.message;
				}
			);
		}
		else
		{			
		}
		}
  }

}
