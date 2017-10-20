import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { DatePipe } from '@angular/common';
import {IMyDpOptions} from 'mydatepicker';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public service: ProductService, private _service: NotificationsService) { }
  public product: any = new Product(null, null, null, null, null, null);
  ngOnInit():void {
  }
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
    showTodayBtn: true,
  };

  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    lastOnBottom: true
    }
  public button = "Add";
  NewProduct(){
      this.button = "Adding..";
      this.product.date = this.product.date['formatted'];
      this.service.addProduct(this.product)
      .then((data)=>{
          if (data['status'] == 201){
              this._service.success('Success', data.json()['name'] + ' added!');
          }else{
              this._service.error('There was some error, retry..');
          }
          console.log(data);
      })
      this.button = "Add";
  }
  public date = 'asdf';
  get diagnostic() { return JSON.stringify(this.product); }

  onChange(event) {
      console.log(event);
  }

}
