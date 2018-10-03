import { Component, OnInit } from '@angular/core';
import { MoviesdbService } from '../moviesdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score$ : object;
  upcoming : object;
  ar:[];
  arr: [];

  constructor(private moviesdbService: MoviesdbService) { }

  ngOnInit() {
    this.moviesdbService.getTrending().subscribe(
      (data) => {this.score$ = data;
      console.log(this.score$);
        this.ar=data.results.map(e=>{e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path;return e})
        console.log(this.ar);
      })

      this.moviesdbService.getUpcoming().subscribe(
        (data) => {this.upcoming = data;
        console.log(this.upcoming);
          this.arr=data.results.map(e=>{e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path;return e})
          console.log(this.arr);
        })
  }



}
