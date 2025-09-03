import { Signal} from '@angular/core';

export class Customer {

  public constructor(
    public name: Signal<string>,
    public email: Signal<string>,
  ) { }


}
