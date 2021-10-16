import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/productmodel';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title:string = "Add New Product";

  constructor(private productService:ProductService,private router:Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null );

  ngOnInit(): void {
  }
  AddProduct(){
  this.productService.newProduct(this.productItem);
  console.log("called");
  alert("success");
  this.router.navigate(['/']);

  }

}
