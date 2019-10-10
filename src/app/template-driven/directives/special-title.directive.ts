import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpecialTitleDirective]'
})
export class SpecialDirective {

  @HostListener('input', ['$event'])
  handler(event: KeyboardEvent) {
    const TITLE_LIMIT = 25;
    const input = event.target as HTMLInputElement;
    let result = input.value.toUpperCase();

    if (result.length > TITLE_LIMIT) {
      result = result.substr(0, TITLE_LIMIT);
    }
    input.value = result;
    // credit-card mock
    // const TITLE_LIMIT = 4;
    // const input = event.target as HTMLInputElement;
    // let trimmed = input.value.replace(/\s/g, '');
    // if (trimmed.length > 25) {
    //   trimmed = trimmed.substr(0, 25);
    // }

    // const title = [];
    // for (let i = 0; i < trimmed.length; i += TITLE_LIMIT) {
    //   title.push(trimmed.substr(i, TITLE_LIMIT));
    // }

    // input.value = title.join(' ');
  }

}
