import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: 'maps',
    component: MapsComponent,
  }
];

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RxjsModule { }
