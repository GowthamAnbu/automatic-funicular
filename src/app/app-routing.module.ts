import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AnimeDetailsComponent } from './containers/anime-details/anime-details.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent
},{
  path: 'anime-details/:id',
  component: AnimeDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
