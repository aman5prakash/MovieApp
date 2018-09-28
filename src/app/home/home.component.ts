import { Component, OnInit } from '@angular/core';
import { MoviesdbService } from '../moviesdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score$ : object;

  constructor(private moviesdbService: MoviesdbService) { }

  ngOnInit() {
    this.moviesdbService.getTrending().subscribe(
      (data) => {this.score$ = data;
      console.log(this.score$);
      })
  }

}
