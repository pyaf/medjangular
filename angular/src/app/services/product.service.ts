import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
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

}
