import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {

  baseUrl = 'https://localhost:3000/';
  constructor(private http: HttpClient) {
  }

  post(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }
}
