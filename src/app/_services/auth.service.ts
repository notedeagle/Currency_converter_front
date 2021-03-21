import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<HttpResponse<Config>> {
    return this.http.post<Config>(`${this.apiServerUrl}/login`, {
      username,
      password
    }, {observe: 'response'});
  }
}
