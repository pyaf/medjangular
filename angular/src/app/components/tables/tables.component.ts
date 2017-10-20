import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(public service: ProductService) { }
  public products: JSON;
  filter_: string;
  ngOnInit(): void {
  	this.service.getProducts()
  	.then((data) => {
  		console.log(data.json());
  		this.products = data.json();
  	})

  }
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

}
