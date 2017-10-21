export class Product {
	constructor(
		// public pk: number,
		public name: string,
		public company: string,
    public price: number,
    public date: string,
    public discount: number,
    public trader?: string,
    public batch?: string,
		
		){}
}
