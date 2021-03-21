import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

const AUTH_API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<HttpResponse<Config>> {
    return this.http.post<Config>(AUTH_API + 'login', {
      username,
      password
    }, {observe: 'response'});
  }
}
