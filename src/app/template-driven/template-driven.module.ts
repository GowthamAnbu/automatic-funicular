import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostCountComponent } from './components/posts-count/posts-count.component';
import { PostDashboardComponent } from './containers/post-dashboard/post-dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent,
    PostCountComponent,
    PostDashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenRoutingModule,
    MaterialModule
  ],
})
export class TemplateDrivenModule {
}
