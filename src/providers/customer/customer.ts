import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Customer } from '../../entities/customer'

/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerProvider {
	
	ipAddress = '192.168.137.1';
	// ipAddress = '100.110.30.81';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/MakanMaker-rest/webresources/customer';
	
	baseUrl = "/api/customer";
	
	username = "";
	password = "";
	
	updatedFullName = "";
	updatedEmail = "";
	updatedGender = -1;
	updatedDateOfBirth = "";
	updatedMobile = "";
	
	loginCredential = "";
	updatedParam = "";

	constructor(public platform: Platform,
				private httpClient: HttpClient) {
		console.log('Hello CustomerProvider Provider');
	}
	
	setDetailsToUpdate(fullName: string, email: string, gender: number, dateOfBirth: string, mobile: string) 
	{
		this.updatedFullName = fullName;
		this.updatedEmail = email;
		this.updatedGender = gender;
		this.updatedDateOfBirth = dateOfBirth;
		this.updatedMobile = mobile;
		this.updatedParam = "&fullName=" + fullName + "&email=" + email + "&gender=" + gender + "&dateOfBirth=" + dateOfBirth + "&mobile=" + mobile;
		console.log('setDetailsToUpdate() CustomerProvider');

	}
	
	setLoginCredential(username: string, password: string)
	{
		this.username = username;
		this.password = password;
		this.loginCredential = "?username=" + username + "&password=" + password;
		console.log('setLoginCredential(username, password) CustomerProvider with username: ' + username + ' and password:' + password);
	}
	
	// add login credentials later
	getCustomerByCustomerId(customerId: number): Observable<any> 
	{
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.get<any>(path + "/" + customerId).pipe
		(
			catchError(this.handleError) 
		);
	}
	
	// add login credentials later
	updateCustomer(customerToUpdate: Customer): Observable<any>
	{
		console.log('updateCustomer(customerToUpdate) customerProvider');
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		console.log('updateCustomer: this.username = ' + this.username + ', this.password = ' + this.password);
		
		return this.httpClient.post<any>(path + this.loginCredential + this.updatedParam).pipe
		(
			catchError(this.handleError)
		);
	}
	
	private handleError(error: HttpErrorResponse)
	{
		if (error.error instanceof ErrorEvent) 
		{		
			console.error('An unknown error has occurred:', error.error.message);
		} 
		else 
		{		
			console.error(" A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`);
		}
		
		return new ErrorObservable(error);
	}
}

