import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trivial',
})
export class TrivialPipe implements PipeTransform {
  transform(pipedValue: string, endCard: string = 'TITLE') {
    const result = `${pipedValue.toUpperCase()} - ${endCard}`;
    return result;
  }
}
