import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users?page=1&per_page=100`);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`);
  }

  postUser(id: any, payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/${id}`, payload);
  }

  addUser(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, payload);
  }

}

