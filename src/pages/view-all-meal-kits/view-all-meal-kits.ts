import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllMealKitsPage');
  }

}


