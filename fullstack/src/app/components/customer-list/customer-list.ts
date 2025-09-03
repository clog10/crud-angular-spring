import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customerService';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-list',
  imports: [ CommonModule ],
  templateUrl: './customer-list.html',
})
export class CustomerList {

  private readonly customerService = inject(CustomerService);

  readonly customers: WritableSignal<Customer[]> = signal([] as Customer[]);

  constructor() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers.set(customers);
    });
  }

  deleteCustomer(customer: Customer){
    this.customerService.deleteCustomerById(customer).subscribe(
      {
        next: (res) => {
          console.log(res.message);
          this.customers.update(customers => customers.filter(c => c.id !== customer.id));
        }
      }
    );
  }

}
