import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private api = signal("http://localhost:8080/api/customers");


  public constructor(private http:HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:8080/api/customers/listar");
  }

}
