import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CadastrarPaciente } from '../model/cadastrarPaciente';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

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


}
