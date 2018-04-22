import { Customer } from './customer'
import { Address } from './address'
import { MealKit } from './mealKit'
import { Transaction } from './transaction'

export class Order
{
	orderId: number;
	//customer: Customer;
	totalAmount: number;
	mealKit: MealKit;
	quantity: number;
	deliveryDate: Date;
	purchasingDate: Date;
	//address: Address;
	orderNumber: string;
	orderStatus: string;
	// transaction: Transaction;
	extraRequest: string;
	shippingFee: number;
	isReviewed: boolean;
}
