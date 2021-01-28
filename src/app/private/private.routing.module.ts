import { VisualizarPacienteComponent } from './pacientes/visualizar/visualizar-paciente.component';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesEditComponent } from './pacientes/pacientes-edit.component';
import { ListAgendaComponent } from './agenda/list-agenda/list-agenda.component';


const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'pacientes', component: PacientesComponent},
    { path: 'paciente/:id', component: PacientesEditComponent},
    { path: 'pacientes/visualizar', component: VisualizarPacienteComponent},
    { path: 'agenda', component: ListAgendaComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
