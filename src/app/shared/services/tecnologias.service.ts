import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tecnologia } from '../models/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  constructor() { }


  getTecnologias(): Observable<Tecnologia[]>{
    return of([
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'JavaScript'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'ruby', desc: 'Ruby'},
    ] as Tecnologia[]);
  }

}
