import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  constructor() { }

  getNewLatter(): Observable<any[]>{
    return of([
      {valor: 's', desc: 'Sim'},
      {valor: 'n', desc: 'Não'},
    ]);
  }

}
