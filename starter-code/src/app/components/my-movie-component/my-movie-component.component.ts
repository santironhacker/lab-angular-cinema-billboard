import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  id: Number;
  movie: any;

  constructor(private moviesService : MoviesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
    this.id = params.id;
    this.movie = this.moviesService.getMovie(Number(this.id));
  });
  }

  // Let's pretend to make it completely asynchronous:
  // ngOnInit() {
  //   console.log(this.movie);
  //   window.setTimeout( function () {
  //     this.movie = this.moviesService.getMovie(5);
  //     console.log(this.movie);
  //   }, 5000);
  // }

}
