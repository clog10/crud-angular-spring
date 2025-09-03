import { Signal} from '@angular/core';

export class Customer {

  public constructor(
    public id: Signal<string | undefined>,
    public name: Signal<string>,
    public email: Signal<string>,
  ) { }


}
