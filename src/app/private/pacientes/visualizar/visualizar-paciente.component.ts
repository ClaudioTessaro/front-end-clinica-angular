import { DescriptionModalService } from './../../../shared/description-modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { Paciente } from '../../model/paciente';
import { Pagination } from 'src/app/shared/default-pagination/pagination.interface';

@Component({
  selector: 'app-visualizar-paciente',
  templateUrl: './visualizar-paciente.component.html',
  styleUrls: ['./visualizar-paciente.component.css']
})
export class VisualizarPacienteComponent implements OnInit {
  pagination: Pagination = Object();
  dadosMockado: Paciente[] = [{
    nome:'Claudio Tessaro',
    telefone:'(083) 9 96531831',
    email: 'claudio0190@hotmail.com',
    sexo: 'Masculino'
  },{
    nome:'Claudio Tessaro',
    telefone:'(083) 9 96531831',
    email: 'claudio0190@hotmail.com',
    sexo: 'Masculino'
  },{
    nome:'Claudio Tessaro',
    telefone:'(083) 9 96531831',
    email: 'claudio0190@hotmail.com',
    sexo: 'Masculino'
  },{
    nome:'Claudio Tessaro',
    telefone:'(083) 9 96531831',
    email: 'claudio0190@hotmail.com',
    sexo: 'Masculino'
 },{
  nome:'Claudio Tessaro',
  telefone:'(083) 9 96531831',
  email: 'claudio0190@hotmail.com',
  sexo: 'Masculino'
 },{
  nome:'Claudio Tessaro',
  telefone:'(083) 9 96531831',
  email: 'claudio0190@hotmail.com',
  sexo: 'Masculino'
 }]

  loading: boolean = false

  constructor(
    private confirmModal: AlertModalService,
    private router:Router,
    private descriptionModal: DescriptionModalService) { }



  ngOnInit() {
      this.pagination.tamanho = 10;
      this.pagination.numero = 0;
      this.pagination.totalDeElementos = 100;
      this.getRequisition();
    }

  getRequisition(): void {
      this.loading = true;
      this.pagination.tamanho = 10;
      this.loading = false;
    }

    pageChange(requestedPage: number): void {
      this.pagination.numero = requestedPage;
      this.getRequisition();
      this.scrollToTableTop();
    }
  
    pageSizeChange(sizePage: number): void {
      this.pagination.tamanho = sizePage;
      this.pagination.numero = 1;
      this.getRequisition();
      this.scrollToTableTop();
    }

    scrollToTableTop(): void {
      window.scrollTo({ top: 125, behavior: 'smooth' });
    }
  

  openModal() {
    this.confirmModal.showConfirm('Excluir','Deseja realmente excluir o paciente ?','Excluir');
  }

  direcionar(){
    this.router.navigate(['/pacientes'])
  }

  openDetalhar(){
    this.descriptionModal.showDescription();
  }

  edit({ id }): void {
    this.router.navigate(['configuracoes/editar-perfil/', id]);
  }

  detail({id}): void {
    this.openDetalhar();
  }

  delete({id}):void {
    this.openModal();
  }

  loggedUserCanEdit(){
    return true;
  }

  loggedUserCanDelete(){
    return true;
  }

  loggedUserCanDetail(){
    return true;
  }
}
