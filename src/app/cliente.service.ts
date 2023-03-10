import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteInterface } from './interfaces/ClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string = 'https://localhost:44325/api/Clientes/'

  constructor(private http: HttpClient) { }

  getClientes() {
    let auth_token = localStorage.getItem('token_values');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.get(this.baseUrl, { headers: headers});
  }

  getCliente(id: number) {
    let auth_token = localStorage.getItem('token_values');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.get(this.baseUrl + id, { headers: headers});
  }
  
  crearCliente(cliente: any) {
    let auth_token = localStorage.getItem('token_values');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.post(this.baseUrl, cliente, { headers: headers});
  }

  actualizarCliente(id: number, cliente: ClienteInterface) {
    let auth_token = localStorage.getItem('token_values');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.put(this.baseUrl + id, cliente, { headers: headers});
  }

  deleteCliente(id: number) {
    let auth_token = localStorage.getItem('token_values');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.delete(this.baseUrl + id, { headers: headers});
  }
}
