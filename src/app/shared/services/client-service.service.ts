import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';

const enviroment = environment

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Array<Client>> {

    // Parametros de consulta
    return this.httpClient.get<Array<Client>>(enviroment.service + "client");
  }

  createClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(enviroment.service + "client", client);
  }

}
