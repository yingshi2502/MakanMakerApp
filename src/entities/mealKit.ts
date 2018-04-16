//import { Review } from './review'
//import { Order } from './order'
//import { Tag } from './tag'

export class MealKit{
	mealKitId: number;
	name: string;
	price: number;
	description: string;
	nutrition: number;
	difficulty: string;
	time: string;
	imagePath: string;
	ingredients: string[];
	recipe: string[];
	isAvailable: boolean;
	//reviews: Review[];
	//orders: Order[];
	//tags: Tag[];
}