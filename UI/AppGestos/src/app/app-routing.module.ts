import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosListComponent } from './components/gastos/gastos-list/gastos-list.component';

const routes: Routes = [
  {path:"gastos" , component: GastosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
