import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { GenericComponent } from './containers/generic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AnimeDetailsComponent } from './containers/anime-details/anime-details.component';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { httpInterceptors } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GenericComponent,
    AnimeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateDrivenModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [...httpInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
