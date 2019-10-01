import { Component, OnInit, Input, Output, EventEmitter, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Post } from 'src/app/template-driven/models/post';
import { TAGS } from '../../constants/constants';
import { ShowCreatorComponent } from '../showCreator/show-creator.component';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styles: [`
  `]
})
export class PostFormComponent implements OnInit, AfterContentInit {

  showIdMessage: boolean;

  @Input()
  isCreateForm = true;

  @Input()
  post: Post;

  @Output()
  postSubmitted = new EventEmitter<Post>();

  // @ContentChild
  @ContentChildren(ShowCreatorComponent) isImageClicked: QueryList<ShowCreatorComponent>;
  // local state based on business logic which is needed by dumb components
  tags = TAGS;

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.isImageClicked) {
      this.isImageClicked.forEach(
        showCreatorComponent => showCreatorComponent.clicked.subscribe((imageClick: boolean) => {
          // console.log('inside form', imageClick);
           this.showIdMessage = imageClick;
        })
      );
      /* this.isImageClicked.clicked.subscribe((imageClick: boolean) => {
        // console.log('inside form', imageClick);
         this.showIdMessage = imageClick;
      }); */
    }
  }

  submit(value: any, valid: boolean) {
    // console.log(value, valid);
    // if (valid) {
      this.postSubmitted.emit(value);
    // }
  }
}
