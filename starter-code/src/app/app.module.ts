import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './components/my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './components/my-movie-component/my-movie-component.component';

import { MoviesService } from './services/movies.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
