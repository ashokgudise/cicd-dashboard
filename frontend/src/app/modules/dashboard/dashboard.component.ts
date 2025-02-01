import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  namespace: string = '';
  serviceAccount: string = '';
  results: any = null;

  constructor(private http: HttpClient) {}

  verify() {
    this.http.post('http://localhost:5000/verify', {
      namespace: this.namespace,
      service_account: this.serviceAccount,
    }).subscribe((data: any) => {
      this.results = data;
    });
  }
}