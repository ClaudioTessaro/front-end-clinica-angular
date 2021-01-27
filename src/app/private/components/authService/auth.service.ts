import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = `${environment.API}`;

  token: string;

  constructor(
    private router:Router,
  ) { }

  deslogar(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}

