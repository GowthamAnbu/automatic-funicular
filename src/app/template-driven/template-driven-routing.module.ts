import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './containers/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const ROUTES: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateDrivenRoutingModule {
}
