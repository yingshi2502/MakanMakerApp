import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
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
import { ProfileDetailsPage } from '../pages/profile-details/profile-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerProvider } from '../providers/customer/customer';
import { AddressProvider } from '../providers/address/address';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
	PaymentPage,
	ShoppingCartPage,
	MyProfilePage,
	SelectAddressPage,
	SelectSchedulePage,
	ViewAllMealKitsPage,
	ViewMealKitDetailsPage,
	CategoriesPage,
	WishListPage,
	ProfileDetailsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule,
	HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
	ShoppingCartPage,
	PaymentPage,
	MyProfilePage,
	SelectAddressPage,
	SelectSchedulePage,
	PaymentPage,
	ShoppingCartPage,
	MyProfilePage,
	ViewAllMealKitsPage,
	ViewMealKitDetailsPage,
	CategoriesPage,
	WishListPage,
	ProfileDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider,
    AddressProvider
  ]
})
export class AppModule {}
