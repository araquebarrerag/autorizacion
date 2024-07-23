import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransaccionServiceService {

  private url = 'http://localhost:8080';
  private header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  public crearTransaccion(transaccion: any) {
    return this.http.post(this.url + '/transaccion', transaccion);
  }

  public cargarTransaccion(transaccion: any) {
    return this.http.get(this.url + '/transaccion/' + transaccion.transaccion.id);
  }

}
