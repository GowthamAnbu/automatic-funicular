import { Component, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';
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
export class PostCountComponent implements DoCheck {

  @Input()
  posts: Post[];

  get postCount() {
    return this.posts ? this.posts.length : null;
  }

  ngDoCheck(): void {
    console.log(this.posts);
  }
}
