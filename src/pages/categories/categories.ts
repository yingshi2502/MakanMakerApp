import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewAllMealKitsPage} from '../view-all-meal-kits/view-all-meal-kits';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
	viewAllMealKits = ViewAllMealKitsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
