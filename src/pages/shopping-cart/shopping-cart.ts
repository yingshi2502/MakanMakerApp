import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectAddressPage } from '../select-address/select-address';

import { MealKit } from '../../entities/mealKit';

/**
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html',
})
export class ShoppingCartPage {
	
	quantities=[];
	mealKits=[];
	totalPrice=0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.quantities=[1,4,2];
	  this.mealKits=[
	  {
		mealKitId: 1,
		name: "Nasi Lemak",
		price: 10.00,
		imagePath: "../../assets/imgs/mealKit1.jpg",
		quantity: this.quantities[0]
	  },
	  {
		mealKitId: 2,
		name: "Bobo Chacha",
		price: 5.00,
		imagePath: "../../assets/imgs/mealKit2.jpg",
		quantity: this.quantities[1]
	  },
	  {
		mealKitId: 3,
		name: "Chicken Chop",
		price: 12.00,
		imagePath: "../../assets/imgs/mealKit3.jpg",
		quantity: this.quantities[2]
	  }
	  ]
	  
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad ShoppingCartPage');
  }
  
	/*public increment () {
	  this.quantity++;
	}

	public decrement () {
	  this.quantity--;
	}*/
	
	public delete (index){
		
		this.mealKits.splice(index, 1);
	}
	
	
  
  pay(totalPrice){
	  console.log("mealkit size"+Object.keys(this.mealKits).length);//working
	  //calculatePrice();
	  for (let mealKit of this.mealKits){
			this.totalPrice+=mealKit.price*mealKit.quantity;
		}
	  this.navCtrl.push(SelectAddressPage, {param1: this.totalPrice, param2: this.mealKits});
	    }

}
