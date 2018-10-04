import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { MoviesdbService } from '../moviesdb.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // @Output() title = new EventEmitter();
  @Input() movie:string;
  Search: any;

  constructor(private moviesdbService: MoviesdbService) {
  }

  handleSearch() {
    // make a service call with this searchTerm passed in.
    this.moviesdbService.getSearch(this.movie).subscribe(
      (data) => {
        console.log(this.movie);
        console.log(data);
      }
    )}

  ngOnInit() {
    
        //  //console.log(this.title+"agwsdjhagdhjagdhjagdhjagdhjagdhagdjhagdja");
        //   this.moviesdbService.getSearch("PK").subscribe(
        //     (data) => {this.Search = data;
        //     console.log(this.Search);
        //       // this.SearchArray=data.results.map(e=>{e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path;return e})
        //       // console.log(this.SearchArray);
        //     })
      }

}
