import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Post } from 'src/app/template-driven/models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard',
  template: `
  <app-post-count [posts]="posts"></app-post-count>
  <app-post *ngFor="let p of posts" [post]="p" (postDeleted)="delete($event)"></app-post>
  `,
  styles: [`
  /* :host {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 100px;
    grid-column-gap: 100px;
  } */
  `],
})
export class PostDashboardComponent implements OnInit {

  posts: Post[];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(p => this.posts = p);
  }

  delete(event: Post) {
    this.postService.deletePosts(event.id)
      .subscribe(() => this.posts = this.posts.filter(p => p.id !== event.id));
  }

}
