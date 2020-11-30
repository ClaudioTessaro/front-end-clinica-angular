import { Paises } from './../private/model/paises';
import { take, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private readonly API = `${environment.API}`;

  constructor(
    private http: HttpClient
  ) {}

  buscarPaises():Observable<Paises[]> {
    return this.http.get<Paises[]>(`${this.API}pais`).pipe(take(1));
  }


}
