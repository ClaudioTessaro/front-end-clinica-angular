import { DescriptionModalService } from './../../../shared/description-modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { Paciente } from '../../model/paciente';
import { Pagination } from 'src/app/shared/default-pagination/pagination.interface';
import { PacienteService } from '../paciente.service';
import { PacientesPaginado } from '../../model/PacientesPaginado';

@Component({
  selector: 'app-visualizar-paciente',
  templateUrl: './visualizar-paciente.component.html',
  styleUrls: ['./visualizar-paciente.component.css']
})
export class VisualizarPacienteComponent implements OnInit {
  pagination: Pagination = Object();
  loading: boolean = false
  listaPacientes: PacientesPaginado[] = [];

  constructor(
    private confirmModal: AlertModalService,
    private router:Router,
    private descriptionModal: DescriptionModalService,
    private pacienteService: PacienteService) { }



  ngOnInit() {
      this.pagination.tamanho = 10;
      this.pagination.numero = 0;
      this.getRequisition();
    }

    getRequisition(): void {
      this.loading = true;
      --this.pagination.numero
      this.pacienteService.buscarPacientes(this.pagination).subscribe(resp => {
        this.listaPacientes = resp.itens;
        this.pagination = resp.paginacao;
        this.pagination.numero = ++resp.paginacao.numero;
        this.loading = false;
      });
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
