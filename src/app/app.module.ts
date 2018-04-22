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
import { ChooseShippingAddressPage } from '../pages/choose-shipping-address/choose-shipping-address';
import { ChooseBillingAddressPage } from '../pages/choose-billing-address/choose-billing-address';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { ViewOrderDetailsPage } from '../pages/view-order-details/view-order-details';
=======
<<<<<<< HEAD
=======




>>>>>>> 2572e05e793c751773d41ddc86ce7c2c85ed3793

import { MyAddressBookPage } from '../pages/my-address-book/my-address-book';
import { CreateNewAddressPage } from '../pages/create-new-address/create-new-address';
import { EditAddressPage } from '../pages/edit-address/edit-address';
import { SignupPage } from '../pages/signup/signup';

<<<<<<< HEAD
=======

import { MyAddressBookPage } from '../pages/my-address-book/my-address-book';
import { CreateNewAddressPage } from '../pages/create-new-address/create-new-address';
import { EditAddressPage } from '../pages/edit-address/edit-address';
import { SignupPage } from '../pages/signup/signup';
>>>>>>> c004b97ea2272e482e1df9f469fecc653bbe1ac4



>>>>>>> 2572e05e793c751773d41ddc86ce7c2c85ed3793
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
	ChooseShippingAddressPage,
	ChooseBillingAddressPage,
	MyOrdersPage,
	ViewOrderDetailsPage 
=======
<<<<<<< HEAD
	SignupPage,
	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,
=======



	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,

  SignupPage,


	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,
	SignupPage



>>>>>>> 2572e05e793c751773d41ddc86ce7c2c85ed3793
>>>>>>> c004b97ea2272e482e1df9f469fecc653bbe1ac4
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
=======
<<<<<<< HEAD
=======


>>>>>>> 2572e05e793c751773d41ddc86ce7c2c85ed3793
>>>>>>> c004b97ea2272e482e1df9f469fecc653bbe1ac4
	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,
	SignupPage,
<<<<<<< HEAD
    ChooseShippingAddressPage,
	ChooseBillingAddressPage,
	MyOrdersPage,
	ViewOrderDetailsPage 
=======
<<<<<<< HEAD
=======



	MyAddressBookPage,
	CreateNewAddressPage,
	EditAddressPage,
	SignupPage

>>>>>>> 2572e05e793c751773d41ddc86ce7c2c85ed3793
>>>>>>> c004b97ea2272e482e1df9f469fecc653bbe1ac4
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
