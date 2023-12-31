export interface IProduct {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: URL
	rating: {
		rate: number
		count: number
	}
}
