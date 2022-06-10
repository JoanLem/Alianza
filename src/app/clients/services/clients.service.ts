import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private API_HOST = 'http://localhost:8082/clients';

  private _refresh$ = new Subject<void>();

  constructor(private HttpClient: HttpClient) {}

  get refresh$() {
    return null;
  }

  public getAllClients(): Observable<any> {
    return this.HttpClient.get(this.API_HOST);
  }

  public saveClient(client: any): Observable<any> {
    return this.HttpClient.post(this.API_HOST, client);
  }

  public findBySharedKey(sharedKey: string): Observable<any> {
    return this.HttpClient.get(this.API_HOST + '/' + sharedKey);
  }
}