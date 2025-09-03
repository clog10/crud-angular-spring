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

  readonly customers: Signal<Customer[]> = toSignal(
    this.customerService.getCustomers(), { initialValue: [] as Customer[] }
  );

}
