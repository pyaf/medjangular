import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { DatePipe } from '@angular/common';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public service: ProductService, ) { }
  public product: any = new Product(null, null, null, null, null, null);
  ngOnInit() {

  }
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
    showTodayBtn: true,
};

  public button = "Add";
  NewProduct(){
      this.button = "Adding..";
      this.product.date = this.product.date['formatted'];
      console.log(this.product);
      this.service.addProduct(this.product)
      .then((data)=>{
          console.log(data);
      })
      this.button = "Added";
  }
  public date = 'asdf';
  get diagnostic() { return JSON.stringify(this.product); }

  onChange(event) {
      console.log(event);
  }

}
