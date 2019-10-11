import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateFor]][appTemplateForOf]'
})
export class TemplateForDirective {

@Input()
set appTemplateForOf(collection: Array<any>) {
  // console.log(value);
  if (collection ) {
    this.view.clear();
    collection.forEach((element, index) =>  {
      this.view.createEmbeddedView(this.template, {
        $implicit: element,
        index
      });
    });
  }
}

constructor(
  private view: ViewContainerRef,
  private template: TemplateRef<any>
) {}

}
