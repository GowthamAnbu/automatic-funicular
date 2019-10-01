import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messanger',
  template: `
    <p>
    {{message}}
    </p>
  `
})
export class SpecialMessangerComponent {

  @Input()
  message = 'operation will take 30 minutes';
}
