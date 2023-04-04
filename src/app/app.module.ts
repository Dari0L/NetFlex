import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetailsFilmComponent } from './components/details-film/details-film.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    DetailsFilmComponent,
    HomePageComponent,
    ContentsPageComponent,
    SearchPageComponent,
    FavoritesPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
