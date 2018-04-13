import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ViewMealKitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-meal-kit-details',
  templateUrl: 'view-meal-kit-details.html',
})
export class ViewMealKitDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMealKitDetailsPage');
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Added to Cart!',
      subTitle: 'Item has been added to Cart successfully!',
      buttons: ['OK']
    });
    alert.present();
  }
}
