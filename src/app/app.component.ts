import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { PaymentPage } from '../pages/payment/payment';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { SelectAddressPage } from '../pages/select-address/select-address';
import { SelectSchedulePage } from '../pages/select-schedule/select-schedule';
import { MyAddressBookPage } from '../pages/my-address-book/my-address-book';

import { ViewAllMealKitsPage } from '../pages/view-all-meal-kits/view-all-meal-kits';
import { ViewMealKitDetailsPage } from '../pages/view-meal-kit-details/view-meal-kit-details';
import { CategoriesPage } from '../pages/categories/categories';
import { WishListPage } from '../pages/wish-list/wish-list';
import { SignupPage } from '../pages/signup/signup';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = CategoriesPage;
  pages: Array<{title: string, component: any, icon:string,initial:boolean}>;
  pagesNoLogin: Array<{title: string, component: any, icon:string,initial:boolean}>;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HelloIonicPage,icon:'home',initial:true },
	    { title: 'My Profile', component: MyProfilePage,icon: 'person', initial:false },
	    { title: 'My Address Book', component: MyAddressBookPage,icon: 'book',initial:false },
	    { title: 'View All MealKits', component: ViewAllMealKitsPage,icon:'list-box',initial:true  },
	    { title: 'Categories', component: CategoriesPage,icon: 'pizza',initial:true },
	    { title: 'Wish List', component: WishListPage,icon:'heart',initial:false  },
	    { title: 'My Shopping Cart', component: ShoppingCartPage,icon:'cart',initial:false},
    ];

     this.pagesNoLogin = [
      { title: 'Login', component: HelloIonicPage,icon:'home',initial:true },
      { title: 'View All MealKits', component: ViewAllMealKitsPage,icon:'list-box',initial:true  },
      { title: 'Categories', component: CategoriesPage,icon: 'pizza',initial:true },

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
