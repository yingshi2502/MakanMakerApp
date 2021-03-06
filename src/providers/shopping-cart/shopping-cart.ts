import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';
/*
  Generated class for the ShoppingCartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ShoppingCartProvider {
    ipAddress = '172.25.105.45';
 	//ipAddress = '192.168.137.1';
	// ipAddress = '100.110.30.81';
	portNo = '8080';
	
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/MakanMaker-rest/webresources/shoppingCart';
	
	baseUrl = "/api/shoppingCart";
	
	username = "";
	password = "";
	loginCredential = "";
	constructor(public platform: Platform, public httpClient: HttpClient) {
    console.log('Hello ShoppingCartProvider Provider');
  }
 
  retrieveShoppingCart(customerId: string): Observable<any> 
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
		
		return this.httpClient.get<any>(path + "/retrieveShoppingCart?customerId=" + customerId).pipe
		(
			catchError(this.handleError) 
		);
	}  


 
  
  retrieveWishListByCustomerId(customerId: string): Observable<any> 
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
		
		return this.httpClient.get<any>(path + "/retrieveWishListByCustomerId?customerId=" + customerId).pipe
		(
			catchError(this.handleError) 
		);
	}  
	
	
	addItem(customerId: string, mealKitId: string, qty: string): Observable<any>
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
		//return this.httpClient.post<any>(path + "/add?customerId=1&qty=1&mealKitId=2").pipe
		let newPath: string = '/add?customerId='+customerId+'&qty=' + qty + '&mealKitId=' + mealKitId;
		return this.httpClient.get<any>(path+newPath).pipe
		(
			catchError(this.handleError)
		);
	}	
	
	addWishList(customerId: string, mealKitId: string): Observable<any>
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
		//return this.httpClient.post<any>(path + "/add?customerId=1&qty=1&mealKitId=2").pipe
		let newPath: string = '/addWishList?customerId='+customerId + '&mealKitId=' + mealKitId;
		return this.httpClient.get<any>(path+newPath).pipe
		(
			catchError(this.handleError)
		);
	}		
	
	deleteWishList(customerId: string, mealKitId: string): Observable<any>
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
		//return this.httpClient.post<any>(path + "/add?customerId=1&qty=1&mealKitId=2").pipe
		let newPath: string = '/deleteWishList?customerId='+customerId + '&mealKitId=' + mealKitId;
		return this.httpClient.delete<any>(path+newPath).pipe
		(
			catchError(this.handleError)
		);
	}		

	deleteItem(customerId: string, mealKitId: string): Observable<any>
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
		//return this.httpClient.post<any>(path + "/delete?customerId=1&qty=1&mealKitId=2").pipe
		let newPath: string = '/delete?customerId='+customerId + '&mealKitId=' + mealKitId;
		return this.httpClient.delete<any>(path+newPath).pipe
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
