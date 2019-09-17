import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostCountComponent } from './components/posts-count/posts-count.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent,
    PostCountComponent,
  ],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule
  ],
})
export class TemplateDrivenModule {
}
