import { Order } from './order'

export class Address
{
	addressId: number;
	floorUnit: string;
	fullName: string;
	isDefaultBilling: boolean;
	isDefaultShipping: boolean;
	isDeleted: boolean;
	orders: [Order]
	phoneNumber: string;
	postalCode: string;
	streetAddress: string;
}
