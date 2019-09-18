import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-count',
  template: `
    <div>
    count {{postCount}}
    </div>
  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCountComponent {

  @Input()
  posts: Post[];

  get postCount() {
    return this.posts ? this.posts.length : null;
  }

}
