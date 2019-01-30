import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {

  baseUrl = '';
  constructor(private http: HttpClient) {
  }

  post(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }
}
