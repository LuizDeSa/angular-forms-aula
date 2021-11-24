import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor() { }

  getCargos(): Observable<Cargo[]>{
    return of([
      {nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      {nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
    ] as Cargo[]);
  }

}
