import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PrivateRoutingModule } from './private.routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PacientesComponent, HomeComponent],
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
