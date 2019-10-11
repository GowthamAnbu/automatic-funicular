import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef
} from '@angular/core';
import { Router } from '@angular/router';

import { Post } from 'src/app/template-driven/models/post';
import { PostService } from '../../services/post.service';
import { PostCreateComponent } from '../post-create/post-create.component';
import { TrivialPipe } from '../../directives/trivial.pipe';

@Component({
  selector: 'app-dashboard',
  template: `
    <!--debug-->
    <!-- mocking structural-->
    <!--<div *appTemplateFor="let post of posts">
      {{ post.title }}
    </div>-->
    <!--<div *ngFor="let post of mappedPosts">
      {{ post.title }}
    </div>-->
    <div *ngFor="let post of posts">
      {{ post.title | trivial: '?'}}
    </div>
    <button mat-mini-fab (click)="goto('/creat-post')">
      <mat-icon>add</mat-icon>
    </button>
    <!--debug-->
    <app-post-count [posts]="posts"></app-post-count>
    <!-- super Cool mock :)-->
    <!--<app-post
      *appTemplateFor="let p of posts"
      [post]="p"
      (postDeleted)="delete($event)"
      (postupdated)="update($event)"
    ></app-post>-->
    <app-post
      *ngFor="let p of posts"
      [post]="p"
      (postDeleted)="delete($event)"
      (postupdated)="update($event)"
    ></app-post>
    <button mat-button (click)="toggleComponent()">
      {{ isDynamicFormCreated ? 'Destroy' : 'Create' }}
    </button>
    <div #projectionPoint>
      projected|injected content goes after this div
    </div>
    <ng-template #that let-imp let-ult="ultimate">
      {{ imp }} -> {{ ult }}
      inside ng-template
    </ng-template>
  `,
  styles: [
    `
      /* :host {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 100px;
    grid-column-gap: 100px;
  } */
    `
  ],
  providers: [ TrivialPipe ]
})
export class PostDashboardComponent implements OnInit, AfterContentInit {
  isDynamicFormCreated = true;
  postFormComponent: ComponentRef<PostCreateComponent>;
  posts: Post[];
  mappedPosts: Post[];
  @ViewChild('projectionPoint', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;
  @ViewChild('that', { static: true }) tmpl: TemplateRef<any>;

  constructor(
    private postService: PostService,
    private router: Router,
    private resolver: ComponentFactoryResolver,
    private trivialPipe: TrivialPipe
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(p => {
      this.posts = p;
      /* this.mappedPosts = this.posts.map(post => {
        return {...post, title: this.trivialPipe.transform(post.title)};
      }); */
    });
    // mocking test value to clear the viewcontainer
    /* setTimeout(() => {
      this.posts = [...this.posts, {
        id: 5,
        title: 'Test',
        author: 'Test',
        gender: 'Test',
        tag: 3
      }];
    }, 5000); */
  }

  createPostFormComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(
      PostCreateComponent
    );
    this.postFormComponent = this.entry.createComponent(componentFactory, 0);
    // accessing dynamic component instance and updating properties without @input inside dynamic component.
    this.postFormComponent.instance.title = 'Post will be created';
  }

  ngAfterContentInit() {
    // mocking move component
    // this.entry.createComponent(this.resolver.resolveComponentFactory(PostCreateComponent));
    // this.createPostFormComponent();
    // in order to inject template into a host we need to use the createEmbeddedView
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'implicit?',
      ultimate: 'noww'
    });
  }

  toggleComponent() {
    // console.log(this.postFormComponent);
    if (this.isDynamicFormCreated) {
      this.isDynamicFormCreated = false;
      this.postFormComponent.destroy();
      // shouldn't move because component is destroyed
      // this.entry.move(this.postFormComponent.hostView, 1);
    } else {
      this.isDynamicFormCreated = true;
      this.createPostFormComponent();
      this.entry.move(this.postFormComponent.hostView, 1);
    }
  }

  delete(event: Post) {
    this.postService
      .deletePosts(event.id)
      .subscribe(
        () => (this.posts = this.posts.filter(p => p.id !== event.id))
      );
  }

  update(event: Post) {
    this.postService.updatePosts(event).subscribe(updatedPost => {
      this.posts = this.posts.map(post => {
        if (post.id === updatedPost.id) {
          post = { ...updatedPost };
        }
        return post;
      });
    });
  }

  goto(path: string) {
    this.router.navigate([path]);
  }
}
