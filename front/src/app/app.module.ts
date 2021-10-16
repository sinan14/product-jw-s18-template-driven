import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { TokenInterceptorService } from './token-intercepter.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { LoginTempComponent } from './login-temp/login-temp.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ProductListComponent,
    NewProductComponent,
    LoginTempComponent,
    LoginReactiveComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,AuthService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
