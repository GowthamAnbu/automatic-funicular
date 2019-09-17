import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Post } from 'src/app/template-driven/models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard',
  template: `
  <app-post-count [posts]="posts"></app-post-count>
  <button mat-button (click)="mock()">Mock</button>
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
    this.postService.getPosts().subscribe(p => {
      this.posts = p;
    });
  }

  delete(event: Post) {
    // console.log(event);
    const index = this.posts.findIndex(p => p.id === event.id);
    this.posts.splice(index, 1);
    // this.posts = [...this.posts];
    // console.log(this.posts);
    // call Mocked API here
  }

  mock() {
    const mockk = {
      id: 100,
      title: '100',
      author: '100',
      gender: '100',
      tags: [
        '100',
        '100',
        '100',
        '100p'
      ]
    };
    // this.posts[0].title = 'mocked';
    // this.posts.push(mockk);
    this.posts[this.posts.length] = mockk;
    // this.posts = [...this.posts];
  }
}
