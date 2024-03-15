import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterFrom } from '../Interfaces/registroProceso.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  getRegistro(formData:RegisterFrom){

return this.http.post(`http://localhost:9099/api/procesos`,formData)

  }
}
