
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PrivateRoutingModule } from './private.routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizarPacienteComponent } from './pacientes/visualizar/visualizar-paciente.component';
import { PacientesEditComponent } from './pacientes/pacientes-edit.component';





@NgModule({
  declarations: [
    PacientesComponent,
    PacientesEditComponent,
    HomeComponent,
    VisualizarPacienteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    PrivateRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PrivateModule { }
