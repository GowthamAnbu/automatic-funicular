import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  template: `
  <div class="space">
    <button mat-raised-button [textContent]="post?.title" (click)="goto(post?.id)" [color]="'primary'"></button>
  </div>
  `,
  styles: [`
    .space {
      padding-top: 10px;
      button {
        cursor: pointer;
      }
    }
  `],
  changeDetection: 0,
})
export class PostsComponent implements OnInit {

  @Input()
  post: Post;

  constructor(
  ) {}

  ngOnInit() {}

  goto(path: string) {
    console.log(path);
  }
}
