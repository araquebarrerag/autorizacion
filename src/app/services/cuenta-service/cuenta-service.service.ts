import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaServiceService {

  private url = 'http://localhost:8080';
  private header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  crearCuenta(cuenta: {}) {
    return this.http.post(this.url + '/cuenta', cuenta).subscribe((result) => console.log(result));
  }

}
