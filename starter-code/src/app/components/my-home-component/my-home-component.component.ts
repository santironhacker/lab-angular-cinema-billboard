import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movieList: Array<Object>;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movieList = this.moviesService.getMovies();
  }

  goToMovie(id) {
    this.router.navigate(['/movie', id])
  }

}
