import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProductService {
  public headers: Headers = new Headers({
        'content-type': 'application/json',
        'X-CSRFToken': this.cookieservice.get('csrftoken')
      })

  constructor(private http: Http, private cookieservice: CookieService ){}

	getProducts(): Promise <any> {
		let url: string = '/api/products/';
		return this.http.get(url, {headers:this.headers}).toPromise();
	}

	addProduct(product): Promise <any>{
		let url: string = '/api/products/';
		return this.http.post(url, product, {headers:this.headers}).toPromise();
	}


	editProduct(pk, product): Promise <any>{
		let url: string = '/api/products/update/'+ pk +'/';
		return this.http.put(url, product, {headers:this.headers}).toPromise();
	}

	deleteProduct(pk): Promise <any>{
		let url: string = '/api/products/delete/' + pk + '/';
		return this.http.get(url, {headers:this.headers}).toPromise();
	}
}
