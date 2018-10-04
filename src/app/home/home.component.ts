import { Component, OnInit } from '@angular/core';
import { MoviesdbService } from '../moviesdb.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score$: any;
  upcoming: any;
  ar: Array<any>;
  arr: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private moviesdbService: MoviesdbService,
    private location: Location
  ) { }

  ngOnInit() {
    this.moviesdbService.getTrending().subscribe(
      (data) => {
      this.score$ = data;
        console.log("Trending", this.score$);
        this.ar = this.score$.results.map(e => { e.poster_path = "https://image.tmdb.org/t/p/w500" + e.poster_path; return e })
        console.log(this.ar);
      })

    this.moviesdbService.getUpcoming().subscribe(
      (data) => {
      this.upcoming = data;
        console.log("Upcoming", this.upcoming);
        this.arr = this.upcoming.results.map(e => { e.poster_path = "https://image.tmdb.org/t/p/w500" + e.poster_path; return e })
        console.log(this.arr);
      })
  }



}
