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
import { PaySelectAddressPage } from '../pages/pay-select-address/pay-select-address';
import { PaySelectSchedulePage } from '../pages/pay-select-schedule/pay-select-schedule';
import { ViewAllMealKitsPage } from '../pages/view-all-meal-kits/view-all-meal-kits';

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
<<<<<<< HEAD
	PaySelectAddressPage,
	PaySelectSchedulePage
=======
	ViewAllMealKitsPage

>>>>>>> a674a3ed8c3118d201436b10e8557c2f8a0fb522
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
<<<<<<< HEAD
	ShoppingCartPage,
	PaymentPage,
	MyProfilePage,
	PaySelectAddressPage,
	PaySelectSchedulePage
=======
	PaymentPage,
	ShoppingCartPage,
	MyProfilePage,
	ViewAllMealKitsPage
>>>>>>> a674a3ed8c3118d201436b10e8557c2f8a0fb522
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
