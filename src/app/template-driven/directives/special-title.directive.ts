import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpecialDirective]'
})
export class SpecialTitleDirective {
  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}
