import { DescriptionModalService } from './../../../shared/description-modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-visualizar-paciente',
  templateUrl: './visualizar-paciente.component.html',
  styleUrls: ['./visualizar-paciente.component.css']
})
export class VisualizarPacienteComponent implements OnInit {

  constructor(
    private confirmModal: AlertModalService,
    private router:Router,
    private descriptionModal: DescriptionModalService) { }



  ngOnInit(): void {

  }

  dadosMockado: Array<Object> = [{
    campo:'Nome',
    descricao:"Claudio Tessao"
  },{
    campo:"CPF",
    descricao:"79160301287"

  },{
    campo:"Sexo",
    descricao:"Masculino"
  },{
   campo:'Nome',
   descricao:"Claudio Tessao"
 },{
   campo:"CPF",
   descricao:"79160301287"

 },{
   campo:"Sexo",
   descricao:"Masculino"
 }]

  openModal(){
    this.confirmModal.showConfirm('Excluir','Deseja realmente excluir o paciente ?','Excluir');
  }

  direcionar(){
    this.router.navigate(['/pacientes'])
  }

  openDetalhar(){
    this.descriptionModal.showDescription();
  }

}
