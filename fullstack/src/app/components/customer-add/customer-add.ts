import { Component, computed, inject, signal, Signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customerService';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customer-add',
  imports: [FormsModule],
  templateUrl: './customer-add.html',
})
export class CustomerAdd {
  private readonly customerService = inject(CustomerService);

  customerCreated: Signal<any> = toSignal(this.customerService.getCustomers(), {
    initialValue: null,
  });

  name: Signal<string> = signal('');
  email: Signal<string> = signal('');

  addCustomer(form: NgForm) {
    const customer = { name: this.name, email: this.email };
    this.customerService.createCustomer(customer).subscribe(() => {
      form.resetForm();
    });
  }
}
