import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosAddComponent } from './components/gastos/gastos-add/gastos-add.component';
import { GastosListComponent } from './components/gastos/gastos-list/gastos-list.component';

const routes: Routes = [
  {path:"gastos" , component: GastosListComponent},
  {path:"gastosAdd",component:GastosAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
