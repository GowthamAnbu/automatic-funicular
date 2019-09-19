import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/template-driven/models/post';
import { TAGS } from '../../constants/constants';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styles: [`
  `]
})
export class PostFormComponent implements OnInit {

  @Input()
  post: Post;

  @Output()
  postSubmitted = new EventEmitter<Post>();

  // local state based on business logic which is needed by dumb components
  tags = TAGS;

  ngOnInit() {
  }

  submit(value: any, valid: boolean) {
    // console.log(value, valid);
    if (valid) {
      this.postSubmitted.emit(value);
    }
  }
}
