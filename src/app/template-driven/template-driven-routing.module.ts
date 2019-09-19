import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDashboardComponent } from './containers/post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './containers/post-details/post-details.component';

const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: PostDashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
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
