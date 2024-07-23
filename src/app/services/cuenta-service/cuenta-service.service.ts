import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaServiceService {

  private url = 'http://localhost:8080';
  private header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  public crearCuenta(cuenta: any) {
    return this.http.post(this.url + '/cuenta', cuenta);
  }

  public cargarCuenta(id: any) {
    return this.http.get(this.url + '/cuenta/' + id);
  }

}
