import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { PaymentPage } from '../pages/payment/payment';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { SelectAddressPage } from '../pages/select-address/select-address';
import { SelectSchedulePage } from '../pages/select-schedule/select-schedule';

import { ViewAllMealKitsPage } from '../pages/view-all-meal-kits/view-all-meal-kits';
import { ViewMealKitDetailsPage } from '../pages/view-meal-kit-details/view-meal-kit-details';
import { CategoriesPage } from '../pages/categories/categories';
import { WishListPage } from '../pages/wish-list/wish-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
	  { title: 'My Profile', component: MyProfilePage },
	  { title: 'View All MealKits', component: ViewAllMealKitsPage },
	  { title: 'Categories', component: CategoriesPage },
	  { title: 'Wish List', component: WishListPage },
	  

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
