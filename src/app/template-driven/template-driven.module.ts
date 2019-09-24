import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostCountComponent } from './components/posts-count/posts-count.component';
import { PostDashboardComponent } from './containers/post-dashboard/post-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { PostDetailsComponent } from './containers/post-details/post-details.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../interceptors/noop-interceptor';

@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent,
    PostCountComponent,
    PostDashboardComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenRoutingModule,
    MaterialModule
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true}],
})
export class TemplateDrivenModule {
}
