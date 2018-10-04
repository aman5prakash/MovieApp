import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Collections', component: CollectionsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}