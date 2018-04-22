import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'

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
<<<<<<< HEAD




import { MyAddressBookPage } from '../pages/my-address-book/my-address-book';
import { CreateNewAddressPage } from '../pages/create-new-address/create-new-address';
import { EditAddressPage } from '../pages/edit-address/edit-address';
import { SignupPage } from '../pages/signup/signup';

=======
import { MyAddressBookPage } from '../pages/my-address-book/my-address-book';
import { CreateNewAddressPage } from '../pages/create-new-address/create-new-address';
import { EditAddressPage } from '../pages/edit-address/edit-address';
import { SignupPage } from '../pages/signup/signup';

>>>>>>> f3bf2b2ec45e21a0156e7e62eea3bae516c95a4c

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerProvider } from '../providers/customer/customer';
import { AddressProvider } from '../providers/address/address';
import { MealKitProvider } from '../providers/meal-kit/meal-kit';
import { LoginProvider } from '../providers/login/login';
import { ShoppingCartProvider } from '../providers/shopping-cart/shopping-cart';
import { CheckoutProvider } from '../providers/checkout/checkout';
import { WishListProvider } from '../providers/wish-list/wish-list';

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
	ProfileDetailsPage,
<<<<<<< HEAD


	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,

  SignupPage,

=======
>>>>>>> f3bf2b2ec45e21a0156e7e62eea3bae516c95a4c
	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,
	SignupPage
<<<<<<< HEAD


=======
>>>>>>> f3bf2b2ec45e21a0156e7e62eea3bae516c95a4c
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
	ViewAllMealKitsPage,
	ViewMealKitDetailsPage,
	CategoriesPage,
	WishListPage,
	ProfileDetailsPage,
<<<<<<< HEAD


	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,
	SignupPage,

=======
>>>>>>> f3bf2b2ec45e21a0156e7e62eea3bae516c95a4c
	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,
	SignupPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	DatePipe,
    CustomerProvider,
    AddressProvider,
    MealKitProvider,
    LoginProvider,
    ShoppingCartProvider,
    CheckoutProvider,
    WishListProvider
  ]
})
export class AppModule {}
