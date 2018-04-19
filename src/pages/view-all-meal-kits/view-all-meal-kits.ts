import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViewMealKitDetailsPage} from '../view-meal-kit-details/view-meal-kit-details';
/**
 * Generated class for the ViewAllMealKitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-all-meal-kits',
  templateUrl: 'view-all-meal-kits.html',
})
export class ViewAllMealKitsPage {
	
viewMealKitDetails = ViewMealKitDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllMealKitsPage');
  }

  
    doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Added to Cart!',
      subTitle: 'Item has been added to Cart successfully!',
      buttons: ['OK']
    });
    alert.present();
  }
  
    doWishListAlert() {
    let alert = this.alertCtrl.create({
      title: 'Added to Wishlist!',
      subTitle: 'Item has been added to Wishlist successfully!',
      buttons: ['OK']
    });
    alert.present();
  }  
}


