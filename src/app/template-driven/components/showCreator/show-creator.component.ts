import { Component, Output, EventEmitter } from '@angular/core';
/*
  this can be a smart component as well
*/
// mocking remember me example
@Component({
  selector: 'app-creator',
  template: `
  <img src="favicon.ico" (click)="creatorClicked()">
  <!--
  <img src="assets/images/minato.png">
  -->
  `,
  styles: [`
  `]
})
export class ShowCreatorComponent {

  isClicked = false;

  @Output()
  clicked = new EventEmitter<boolean>();

  creatorClicked() {
    this.isClicked = !this.isClicked;
    this.clicked.emit(this.isClicked);
  }
}
