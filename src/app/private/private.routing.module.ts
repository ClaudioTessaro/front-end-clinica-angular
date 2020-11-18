
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PacientesComponent } from './pacientes/pacientes.component';


const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'pacientes', component: PacientesComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
