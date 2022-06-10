import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: 'clients', component: ClientsComponent },
  { path: 'auth', loadChildren: ()=>import('./auth/auth.module').then(m => m.AuthModule )},
  { path: 'products', loadChildren: ()=>import('./products/products.module').then(m => m.ProductsModule )},
  { path: 'clients', loadChildren: ()=>import('./clients/clients.module').then(m => m.ClientsModule )},
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
