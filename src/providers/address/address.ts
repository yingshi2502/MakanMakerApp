import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Address } from '../../entities/address'

/*
  Generated class for the AddressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddressProvider {

	ipAddress = '192.168.137.1';
	// ipAddress = '100.110.30.81';
	portNo = '8080';
	// double check if customer is with capital letter or not
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/MakanMaker-rest/webresources/address';
	
	baseUrl = "/api/Address";
	
	username = "";
	password = "";
	loginCredential = "";
	
	
	constructor(public platform: Platform,
				private httpClient: HttpClient) {
		console.log('Hello AddressProvider Provider');
	}
	
	setLoginCredential(username: string, password: string)
	{
		this.username = username;
		this.password = password;
		this.loginCredential = "?username=" + username + "&password=" + password;
	}
  
  // add login credentials later
	/* getAddressByAddressId(addressId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveById/" + addressId).pipe
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
	*/

}
