import { Estado } from './../models/estado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosBrService {

  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<Estado[]>{
    return this.http.get<Estado[]>('assets/dados/estadosBr.json');
  }
}
