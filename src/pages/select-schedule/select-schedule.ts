import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-schedule',
  templateUrl: 'select-schedule.html',
})
export class SelectSchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public event = {
    month: '2018-05-19',
    timeStarts: '07:43',
    timeEnds: '2020-02-20'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectSchedulePage');
  }
	
}