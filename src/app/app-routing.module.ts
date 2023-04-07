import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ContentsDetailPageComponent } from './pages/contents-detail-page/contents-detail-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {title:'Home', path: '', children:[

        {
          path:'',component: HomePageComponent
        },
        {
          title: 'dettagli', path:'details/:slug',component:ContentsDetailPageComponent
        }
  ]},
  {title:'Catalogo', path: 'catalogo', children:[
    {
      path:':slug',children:[
        {
          path:'',component:ContentsPageComponent
        },
        {
          title: 'dettagli', path:'details/:slug',component:ContentsDetailPageComponent
        },
      ]
    }
  ]},
  {title: 'My List', path: 'list', children:[

    {
      path:'',component: FavoritesPageComponent
    },
    {
      title: 'dettagli', path:'details/:slug',component:ContentsDetailPageComponent
    }
  ]},
  {title: 'Search', path: 'search', children:[

    {
      path:'',component: SearchPageComponent
    },
    {
      title: 'dettagli', path:'details/:slug',component:ContentsDetailPageComponent
    }
  ]},

  //{title: 'Search', path: 'search', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
