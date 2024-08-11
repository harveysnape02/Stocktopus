import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addProduct/addproduct.component';
import { ViewProductComponent } from './viewProduct/viewProduct.component';
import { LoginComponent } from './login/login.component';
import { EditProductComponent } from './editProduct/editProduct.component';
import { ErrorComponent } from './error/error.component';
import { SearchProductComponent } from './searchProduct/searchProduct.component';
import { AddProductUpdateComponent } from './add-product-update/add-product-update.component';
import { AuthGuard } from './auth.guard';

const routeConfig: Routes = [
    {path: '', component: AddProductUpdateComponent, title: 'Log In'},
    {path: 'home', component: HomeComponent, title: 'Home Page', canActivate: [AuthGuard]},
    {path: 'addProduct', component: AddproductComponent, title: 'Add Product', canActivate: [AuthGuard]},
    {path: 'viewProduct', component: ViewProductComponent, title:'View Product', canActivate: [AuthGuard]},
    {path: 'searchProduct', component: SearchProductComponent, title:'Search product', canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, title:'Log In'},
    {path: 'editProduct', component: EditProductComponent, title:'Edit Product', canActivate: [AuthGuard]},
    {path: 'addProductUpdate', component: AddProductUpdateComponent, title:'Add product update', canActivate: [AuthGuard]},
    {path: '**', component: ErrorComponent, title: '404'} //add a 404 page here instead of homecomponent
];

export default routeConfig;
