import { Customer } from './customer'
import { Address } from './address'

export class Order
{
	orderId: number;
	customer: Customer;
	totalAmount: number;
	// mealKit: MealKit;
	quantity: number;
	deliveryDate: Date;
	purchasingDate: Date;
	orderStatus: string;
	address: Address;
	// transaction: Transaction;
	extraRequest: string;
	shippingFee: number;
	isReviewed: boolean;
}
