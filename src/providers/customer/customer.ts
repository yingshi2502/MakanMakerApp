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
	
	ipAddress = '100.110.30.81';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/MakanMaker-rest/webresources/';
	
	baseUrl = "/api/Customer";
	
	username = "";
	password = "";
	loginCredential = "";

	constructor(public platform: Platform,
				private httpClient: HttpClient) {
		console.log('Hello CustomerProvider Provider');
	}
	
	setLoginCredential(username: string, password: string)
	{
		this.username = username;
		this.password = password;
		this.loginCredential = "?username=" + username + "&password=" + password;
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
		
		return this.httpClient.get<any>(path + "customer/" + customerId).pipe
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
