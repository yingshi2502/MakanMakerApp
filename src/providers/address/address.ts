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


// changed to text/plain 
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

const httpOptionsJson = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddressProvider {

	ipAddress = '192.168.137.1';
	// ipAddress = '100.110.30.81';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/MakanMaker-rest/webresources/address';
	
	baseUrl = "/api/address";
	
	username = "";
	password = "";

	fullNameToUpdate = "";
	phoneNumberToUpdate = "";
	isDefaultShippingToUpdate = false;
	isDefaultBillingToUpdate = false;
	streetAddressToUpdate = "";
	floorUnitToUpdate = "";
	postalCodeToUpdate = "";

	loginCredential = "";
	updateParam = "";
	
	constructor(public platform: Platform,
				private httpClient: HttpClient) {
		console.log('Hello AddressProvider Provider');
	}

	setDetailsToUpdate(streetAddress: string, floorUnit: string, postalCode: string, fullName: string, phoneNumber: string, isDefaultShipping: boolean, isDefaultBilling: boolean) 
	{
		this.fullNameToUpdate = fullName;
		this.phoneNumberToUpdate = phoneNumber;
		this.isDefaultShippingToUpdate = isDefaultShipping;
		this.isDefaultBillingToUpdate = isDefaultBilling;
		this.streetAddressToUpdate = streetAddress;
		this.floorUnitToUpdate = floorUnit;
		this.postalCodeToUpdate = postalCode;
		this.updateParam = "&streetAddress=" + streetAddress + "&floorUnit=" + floorUnit + "&postalCode=" + postalCode + "&fullName=" + fullName + "&phoneNumber=" + phoneNumber + "&isDefaultShipping=" + isDefaultShipping + "&isDefaultBilling=" + isDefaultBilling;
	}
	
	setLoginCredential(username: string, password: string)
	{
		this.username = username;
		this.password = password;
		this.loginCredential = "?username=" + username + "&password=" + password;
	}
	
	retrieveAddressesByCustomerId(customerId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveAddressByCustomerId?customerId=" + customerId).pipe
		(
			catchError(this.handleError)
		);
	}
  
	// add login credentials later
	getAddressByAddressId(addressId: number): Observable<any>
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
	
	createAddress(newAddress: Address, customerId: number): Observable<any>
	{
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl + "/create";
		}
		else
		{
			path = this.fullBaseUrl + "/create";
		}
		let createAddressReq = {
			"customerId": customerId,
			"address": newAddress
		};
		console.log('createAddress Address Provider: Sending in createAddressReq with path: ' + path );

		return this.httpClient.post<any>(path, createAddressReq, httpOptionsJson).pipe
		(
			catchError(this.handleError)
		);
	}

	updateAddress(customerId: string, addressId: string) { 
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		path = path + "/update" + "?customerId=" + customerId + "&addressId=" + addressId + this.updateParam;
		console.log('updateAddress Address Provider: Sending in path: ' + path);

		return this.httpClient.post<any>(path, "", httpOptions).pipe
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
