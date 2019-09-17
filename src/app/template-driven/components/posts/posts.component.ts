import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Post } from 'src/app/template-driven/models/post';

@Component({
  selector: 'app-post',
  template: `
  <div class="space">
    <button mat-raised-button [textContent]="post?.title" (click)="goto(post?.id)" [color]="'primary'"></button>
    <button mat-mini-fab><mat-icon [color]="'primary'" (click)="delete(post)">delete</mat-icon></button>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnChanges {

  @Input()
  post: Post;

  @Output()
  postDeleted: EventEmitter<Post> = new EventEmitter<Post> ();

  constructor(
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  goto(path: string) {
    console.log(path);
  }

  delete(target: Post) {
    this.postDeleted.emit(target);
  }

}
