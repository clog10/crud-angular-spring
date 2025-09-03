import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private api = signal("http://localhost:8080/api/customers");


  public constructor(private http:HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    //return this.http.get<Customer[]>("http://localhost:8080/api/customers/listar");
    return this.http.get<Customer[]>(this.api().concat("/listar"));
  }

  createCustomer(customer: Customer): Observable<Customer> {
    const body = {name: customer.name(), email: customer.email()}
    return this.http.post<Customer>(this.api().concat("/save"), body);
  }

  deleteCustomerById(customer: Customer): Observable<any>{
    const id = customer.id;
    return this.http.delete(this.api().concat("/eliminar/" + id));
  }

}
