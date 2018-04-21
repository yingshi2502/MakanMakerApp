import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WishListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WishListProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WishListProvider Provider');
  }

}
