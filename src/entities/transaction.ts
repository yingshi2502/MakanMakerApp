//import { Order } from './order'

export class Transaction
{
	transactionId: number;
	amount: number;
	//order: Order;
	transactionCode: string
	transactionType: string;//enum
	paymentType: string;//enum
	transactionDateTime: Date;
	description: string;
	
}
