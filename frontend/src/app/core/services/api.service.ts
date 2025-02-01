import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = '/api/v1';

  constructor(private http: HttpClient) { }

  verifyAccess(payload: any) {
    return this.http.post(`${this.API_URL}/verify`, payload);
  }
}