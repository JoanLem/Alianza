import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { DbclientsComponent } from './pages/dbclients/dbclients.component';

const routes: Routes = [
  { path:'',
  children:[
    { path: 'clients', component: ClientsComponent },
    { path: 'dbclients', component: DbclientsComponent },
    { path: '**', redirectTo: 'clients' },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
