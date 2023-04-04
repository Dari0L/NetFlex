import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {title: 'Home', path: '', component: HomePageComponent},
  { path: 'content', component: ContentsPageComponent},
  {title: 'My List', path: 'list', component: FavoritesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
