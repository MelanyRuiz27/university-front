import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Docent } from '../domain/docent';
@Injectable({
  providedIn: 'root'
})
export class DocentService {
public url : string;
  constructor(public httpClient:HttpClient) {
    this.url = 'http://localhost/University.Web/api/Instructor/';
   }

  

  public getAll(): Observable <any>{
    return this.httpClient.get(this.url);
  }
  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  public save(docent:Docent): Observable <any>{
    return this.httpClient.post(this.url,docent);
  }
  public edit(docent: Docent): Observable<any>{
    return this.httpClient.put(this.url  + docent.ID, docent);
  }
  public delete(id: number){
    return this.httpClient.delete(this.url + id);
  }
}
