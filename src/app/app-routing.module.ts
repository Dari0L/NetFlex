import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ContentsDetailPageComponent } from './pages/contents-detail-page/contents-detail-page.component';

const routes: Routes = [
  {title: 'Home', path: '', component: HomePageComponent},
  { path: 'catalogo', children:[
    {
      path:':slug',component:ContentsPageComponent
    },
    {
      path:':slug/details',component:ContentsDetailPageComponent
    }

  ]},
  {title: 'My List', path: 'list', component: FavoritesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
