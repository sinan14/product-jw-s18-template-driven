import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http : HttpClient) { }
  getProducts(){
    //you must retun 
    return this.http.get<any>('http://localhost:3000/products');
  }
  newProduct(item:any)
   {
     return this.http.post("http://localhost:3000/products",{"product":item})
     .subscribe(data =>{console.log(data)})
   }
}