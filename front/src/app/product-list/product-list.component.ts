import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './productmodel';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String = "product list"
  //product is the model class for a product item
  products:ProductModel[];
  //image properties meant for property binding
  imageWidth:number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;


  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  //creating service object for calling getProducts()
  constructor(private productService : ProductService) { }

  // 
  ngOnInit(): void {
    //calling get products and loading products to products array
    this.productService.getProducts()
    .subscribe((data: any) => {
      this.products = JSON.parse(JSON.stringify(data));
      console.log(this.products)
    })
    
  }

}
