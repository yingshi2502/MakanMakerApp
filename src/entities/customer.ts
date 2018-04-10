import { Address } from './address'
import { Order } from './order'

export class Customer
{
	customerId: number;
	username: string;
	password: string;
	dateOfBirth: Date;
	addresses: [Address];
	email: string;
	fullName: string;
	gender: string;
	mobile: string;
	orderHistory: [Order];
	// transactions: [Transaction];
	// wishlist: [MealKit];
}
