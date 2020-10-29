import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Departament } from '../domain/departament';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

 public url : string ;
 
 
  constructor(public httpClient : HttpClient) { 

    this.url = 'http://localhost/University.Web/api/Department/';
  }

public getAll(): Observable <any> {

  return this.httpClient.get(this.url);
}

public getById(id: number): Observable<any> {
  return this.httpClient.get(this.url + id);
}

public save(departament:Departament): Observable <any>{
  return this.httpClient.post(this.url,departament);
}
public edit(departament: Departament): Observable<any>{
  return this.httpClient.put(this.url   + departament.DepartmentID, departament);
}
public delete(id: number){
  return this.httpClient.delete(this.url + id);
}

}
