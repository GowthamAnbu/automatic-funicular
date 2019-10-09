import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from 'src/app/template-driven/models/post';
import { PostService } from '../../services/post.service';
import { PostCreateComponent } from '../post-create/post-create.component';

@Component({
  selector: 'app-dashboard',
  template: `
  <!--debug-->
  <div *ngFor="let post of posts">
    {{post.title}}
  </div>
  <button mat-mini-fab (click)="goto('/creat-post')"><mat-icon>add</mat-icon></button>
  <!--debug-->
  <app-post-count [posts]="posts"></app-post-count>
  <app-post *ngFor="let p of posts" [post]="p" (postDeleted)="delete($event)" (postupdated)="update($event)"></app-post>
  <button mat-button (click)="toggleComponent()"> {{isDynamicFormCreated ? 'Destroy' : 'Create'}}</button>
  <div #projectionPoint></div>
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
export class PostDashboardComponent implements OnInit, AfterContentInit {


  isDynamicFormCreated = true;
  postFormComponent: ComponentRef<PostCreateComponent>;
  posts: Post[];
  @ViewChild('projectionPoint', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  constructor(
    private postService: PostService,
    private router: Router,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(p => this.posts = p);
  }

  createPostFormComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(PostCreateComponent);
    this.postFormComponent = this.entry.createComponent(componentFactory);
    // accessing dynamic component instance and updating properties without @input inside dynamic component.
    this.postFormComponent.instance.title = 'Post will be created';
  }

  ngAfterContentInit() {
    this.createPostFormComponent();
  }

  toggleComponent() {
    // console.log(this.postFormComponent);
    if (this.isDynamicFormCreated) {
      this.isDynamicFormCreated = false;
      this.postFormComponent.destroy();
    } else {
      this.isDynamicFormCreated = true;
      this.createPostFormComponent();
    }
  }

  delete(event: Post) {
    this.postService.deletePosts(event.id)
      .subscribe(() => this.posts = this.posts.filter(p => p.id !== event.id));
  }

  update(event: Post) {
    this.postService.updatePosts(event)
    .subscribe((updatedPost) => {
      this.posts = this.posts.map(post => {
        if (post.id === updatedPost.id) {
          post = { ... updatedPost};
        }
        return post;
      });
    });
  }

  goto(path: string) {
    this.router.navigate([path]);
  }

}
