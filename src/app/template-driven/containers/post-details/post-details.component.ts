import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  template: `
  <app-post-form [post]="post" [isCreateForm]="false" (postSubmitted)="update($event)"></app-post-form>
  `,
  styles: [`
  `]
})
export class PostDetailsComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(param => this.postService.getPost(param.id)),
    ).subscribe((post: Post) => this.post = post);
  }

  update(post: Post) {
    this.postService.updatePosts(post).subscribe((updatedPost) => this.post = post);
  }
}
