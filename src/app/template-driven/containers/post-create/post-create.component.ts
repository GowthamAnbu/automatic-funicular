import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  template: `
    <p>
      <app-post-form
        [post]="post"
        (postSubmitted)="submit($event)"
      >
      <header>
        <h1 class="header">Create Post</h1>
      </header>
      <button type="submit">Create</button>
      </app-post-form>
    </p>
  `,
  styles: [``]
})
export class PostCreateComponent {
  post: Post;

  constructor(private postService: PostService, private router: Router) {}
  submit(newPost: Post) {
    this.postService
      .createPost(newPost)
      .subscribe(() => this.router.navigate(['/dashboard']));
  }
}
