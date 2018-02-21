import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movieList: Array<Object>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movieList = this.moviesService.getMovies();
  }

}
