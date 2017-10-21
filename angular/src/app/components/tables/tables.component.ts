import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core'; 
import { Product } from '../../models/product';
import { NotificationsService } from 'angular2-notifications';

declare var $: any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(public service: ProductService, private _service: NotificationsService) { }
  public products: JSON;
  public product: any = new Product(null, null, null, null, null, null, null);

  filter_: string;
  ngOnInit(): void {
  	this.service.getProducts()
  	.then((data) => {
  		console.log(data.json());
  		this.products = data.json();
  	})

  }
  // notifications
  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    lastOnBottom: true,
    }

  //modal and edit
  public button = "Edit";
    @ViewChild('modal') modal:ElementRef;
    showModal(i: number){
      this.product = this.products[i];
      console.log(this.product.date);
        $(this.modal.nativeElement).modal('show'); 
    }

   EditProduct(){
    this.service.editProduct(this.product.pk, this.product)
    .then((data) => {
        $(this.modal.nativeElement).modal('hide');
        console.log(data['status'])
          if (data['status'] == 200){
              this._service.success('Success', data.json()['name'] + ' Updated Successfully!');
          }else{
              this._service.error('Error', 'There was some error, retry..');
          }
    })
   }
    DeleteProduct(){
      this.service.deleteProduct(this.product.pk)
      .then((data) =>{
        console.log(data);
        $(this.modal.nativeElement).modal('hide');
          if (data['status'] == 204){
            this._service.success('Success', 'Product Deleted!');
          }else{
            this._service.error('Error', 'There was some error, retry..');
          }
      })
    }

  // sorting table 
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;



}
