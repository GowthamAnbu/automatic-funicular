import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Post } from 'src/app/template-driven/models/post';

@Component({
  selector: 'app-post',
  template: `
  <div class="space">
    <input type="text" [value]="post.title" (input)="onNameChange(name.value)" #name *ngIf="editing" (keyup.enter)="toggleEdit()"/>
    <button mat-raised-button [textContent]="post?.title" (click)="goto(post?.id)" [color]="'primary'" *ngIf="!editing"></button>
    <button mat-button (click)="toggleEdit()">{{editing ? 'Done' : 'Edit'}}</button>
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
  postDeleted = new EventEmitter<Post> ();

  @Output()
  postupdated = new EventEmitter<Post> ();

  editing = false;

  constructor(
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // * Breaking pass-by-reference by assigning object destructuring
    if (changes.post) {
      this.post = {...changes.post.currentValue };
    }
  }

  goto(path: string) {
    console.log(path);
  }

  toggleEdit() {
    if (this.editing) {
      this.postupdated.emit(this.post);
    }
    this.editing = !this.editing;
  }

  delete(target: Post) {
    this.postDeleted.emit(target);
  }

  onNameChange(title: string) {
    this.post = { ...this.post, title };
  }

}
