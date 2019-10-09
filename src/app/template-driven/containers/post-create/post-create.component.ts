import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  template: `
    {{title}}
    <app-post-form
      [post]="post"
      (postSubmitted)="submit($event)"
    >
    <header>
      <h1 class="header">Create Post</h1>
    </header>
    <button type="submit">Create</button>
    <app-creator (clicked)="updatedAnalaysis($event)"></app-creator>
    </app-post-form>
  `,
  styles: [``]
})
export class PostCreateComponent {
  post: Post;
  bigDataAnalysisOfCreator: boolean;
  title = '<operation> will be created';

  constructor(private postService: PostService, private router: Router) {}

  updatedAnalaysis(event: boolean) {
    this.bigDataAnalysisOfCreator = event;
  }

  submit(newPost: Post) {
    console.log('create', this.bigDataAnalysisOfCreator);
    this.postService
      .createPost(newPost)
      .subscribe(() => this.router.navigate(['/dashboard']));
  }
}
