import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Order } from '../../entities/order'

/*
  Generated class for the CheckoutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CheckoutProvider {

  constructor(public platform: Platform,
				private httpClient: HttpClient) {
		console.log('Hello CheckoutProvider Provider');
	}
  
   	ipAddress = '172.31.26.42';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/MakanMaker-rest/webresources/shoppingCart';
	
	baseUrl = "/api/shoppingCart";
	
	createOrder(customerId: string, deliveryDate: string, mealKitId: string, specialRequest: string, qty: string, addressId: string): Observable<any>{
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
	
		return this.httpClient.get<any>(path + "/create?customerId="+customerId+"&deliveryDate="+deliveryDate+"&mealKitId="+mealKitId+"&specialRequest="+specialRequest+"&qty="+qty+"&addressId="+addressId).pipe
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
