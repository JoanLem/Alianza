import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '' ,
  children:[
    { path: 'products', component: ProductsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: 'products'},

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
