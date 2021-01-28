import { DescriptionModalService } from './../../../shared/description-modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Pagination } from 'src/app/shared/default-pagination/pagination.interface';
import { PacienteService } from '../paciente.service';
import { PacientesPaginado } from '../../model/PacientesPaginado';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, take } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-visualizar-paciente',
  templateUrl: './visualizar-paciente.component.html',
  styleUrls: ['./visualizar-paciente.component.css']
})
export class VisualizarPacienteComponent implements OnInit {
  pagination: Pagination = Object();
  loading: boolean = false
  listaPacientes: PacientesPaginado[] = [];
  formulario: FormGroup;

  constructor(
    private confirmModal: AlertModalService,
    private alertModal: AlertModalService,
    private router:Router,
    private descriptionModal: DescriptionModalService,
    private pacienteService: PacienteService,
    private formBuilder: FormBuilder
    ) { }



  ngOnInit() {
      this.formulario = this.formBuilder.group({
        nome: [null],
      });
      this.pagination.tamanho = 10;
      this.pagination.numero = 0;
      this.getRequisition();
    }

    onSubmit(){
      this.pacienteService.buscarPacientesPorNome(this.mapperCadastro(this.formulario)).subscribe(resp => {
      this.loading = true;
      this.listaPacientes = resp.itens;
      this.loading = false;
    })
     
    }

    mapperCadastro(formulario): any{      
      const data = {
        nome: formulario.get('nome').value
      }
      return data;
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
  

  openModal(id) {
    const result$ = this.confirmModal.showConfirm('Excluir','Deseja realmente excluir o paciente ?','Excluir');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.pacienteService.remove(id) : EMPTY)
      ).subscribe(
        sucess =>{
          this.getRequisition();
          this.alertModal.showAlertSuccess(sucess.message);
        },error => {
          this.alertModal.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        }
      )
  }

  direcionar(){
    this.router.navigate(['/pacientes'])
  }

  openDetalhar(){
    this.descriptionModal.showDescription();
  }

  edit({ id }): void {
    this.router.navigate(['paciente/', id]);
  }

  detail({id}): void {
    this.openDetalhar();
  }

  delete({id}):void {
    this.openModal(id);
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
