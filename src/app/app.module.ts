import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CollectionsComponent } from './collections/collections.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MoviesdbService } from './moviesdb.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CollectionsComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MoviesdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
