import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { PaymentPage } from '../pages/payment/payment';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
=======
import { MyProfilePage } from '../pages/my-profile/my-profile';
>>>>>>> 99cbc7ea43a78e8abb1fc582f8f0effef3fbc957

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
<<<<<<< HEAD
	PaymentPage,
	ShoppingCartPage
=======
	MyProfilePage
>>>>>>> 99cbc7ea43a78e8abb1fc582f8f0effef3fbc957
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
	PaymentPage,
	ShoppingCartPage
=======
	MyProfilePage
>>>>>>> 99cbc7ea43a78e8abb1fc582f8f0effef3fbc957
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
