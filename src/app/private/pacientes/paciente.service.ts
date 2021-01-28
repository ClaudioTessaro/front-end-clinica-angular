import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CadastrarPaciente } from '../model/cadastrarPaciente';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { PacientesPaginado } from '../model/PacientesPaginado';
import { Pagination } from 'src/app/shared/default-pagination/pagination.interface';
import { ResponseGeral } from 'src/app/shared/interface/responsegeral';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly API = `${environment.API}`;

  constructor(
    private http: HttpClient
  ) {}

  cadastrarPaciente(paciente: CadastrarPaciente):Observable<CadastrarPaciente> {
    return this.http.post<CadastrarPaciente>(`${this.API}paciente`, paciente).pipe(take(1));
  }

  buscarPacientes(pagination?: Pagination):Observable<PacientesPaginado>{
    return this.http.get<PacientesPaginado>(`${this.API}paciente?size=${pagination.tamanho}&page=${pagination.numero}`);
  }

  
  buscarPacientesPorNome(nome?: any):Observable<PacientesPaginado>{
    return this.http.get<PacientesPaginado>(`${this.API}paciente?size=15&nome=${nome.nome}`);
  }

  remove(id: number){
    return this.http.delete<ResponseGeral>(`${this.API}paciente/${id}`);
  }

  buscarPacientePorId(id: number){
    return this.http.get<CadastrarPaciente>(`${this.API}paciente/${id}`);
  }

}
