import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginTempComponent } from './login-temp/login-temp.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'add',canActivate:[AuthGuard],component:NewProductComponent},
  {path:'logintemp',component:LoginTempComponent},
  {path:'loginreact',component:LoginReactiveComponent},
  {path:'login',component:LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
