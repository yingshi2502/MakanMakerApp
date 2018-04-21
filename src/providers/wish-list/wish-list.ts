import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WishListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class WishListProvider {


    ipAddress = '172.31.26.42';
	portNo = '8080';
	// double check if mealkit is with capital letter or not
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/MakanMaker-rest/webresources/mealkit';
	
	baseUrl = "/api/mealkit";
	
	username = "";
	password = "";
	loginCredential = "";

  constructor(public http: HttpClient) {
    console.log('Hello WishListProvider Provider');
  }

  



}
