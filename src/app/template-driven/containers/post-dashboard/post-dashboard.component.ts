import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-post-count [posts]="posts"></app-post-count>
    <app-post *ngFor="let post of posts" [post]="post"></app-post>
  `,
  styles: [`
  /* :host {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 100px;
    grid-column-gap: 100px;
  } */
  `]
})
export class PostDashboardComponent implements OnInit {

  posts: Post[];

  constructor(
    private Http: HttpClient
  ) {}

  ngOnInit(): void {
    this.Http.get<Post[]>(`${environment.apiUrl}posts`).subscribe(p => {
      this.posts = p;
    });
  }
}
