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
import { PostCreateComponent } from './containers/post-create/post-create.component';
import { ShowCreatorComponent } from './components/showCreator/show-creator.component';
import { SpecialMessangerComponent } from './components/special-messanger/special-messanger';
import { SpecialDirective } from './directives/special-title.directive';
import { TemplateForDirective } from './directives/templateFor.directive';
@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent,
    PostCountComponent,
    PostDashboardComponent,
    PostDetailsComponent,
    PostCreateComponent,
    ShowCreatorComponent,
    SpecialMessangerComponent,
    SpecialDirective,
    TemplateForDirective
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
