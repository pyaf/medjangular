export class Product {
	constructor(
		public name: string,
		public company: string,
        public trader: string,
        public price: number,
        public date: string,
        public batch?: string,
		){}
}
