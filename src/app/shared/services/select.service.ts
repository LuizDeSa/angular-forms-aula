import { Tecnologia } from './../models/tecnologia';
import { HttpClient } from '@angular/common/http';
import { Estado } from './../models/estado';
import { Cargo } from './../models/cargo';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http: HttpClient) { }

  getCargos(): Observable<Cargo[]>{
    return of([
      {nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      {nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
    ] as Cargo[]);
  }

  getEstadosBr(): Observable<Estado[]>{
    return this.http.get<Estado[]>('assets/dados/estadosBr.json');
  }

  getTecnologias(): Observable<Tecnologia[]>{
    return of([
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'JavaScript'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'ruby', desc: 'Ruby'},
    ] as Tecnologia[]);
  }

}
