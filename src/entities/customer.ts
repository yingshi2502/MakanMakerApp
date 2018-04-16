//import { Address } from './address'
//import { Order } from './order'
//import { MealKit } from './mealKit'
//import { Transaction } from './transaction'
//import { ShoppingCart } from './shoppingCart'

export class Customer
{
	customerId: number;
	username: string;
	fullName: string;
	mobile: string;
	email: string;
	password: string;
	//orderHistory: Order[];
	//addresses: Address[];
	//wishlist: MealKit[];
	dateOfBirth: Date;
	gender: number;//0:male, 1:female
	// transactions: Transaction[];
	//shoppingCart: ShoppingCart;
}
