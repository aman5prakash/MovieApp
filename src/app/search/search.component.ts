import { Component, OnInit, Input } from '@angular/core';
import { MoviesdbService } from '../moviesdb.service';
import { ActivatedRoute, Data } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
//import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //@Input() title;
  // movie:string;
  // // SearchArray : [];
  // w_movie:string;
 // @Output() Search = new EventEmitter();
 //Search : NavBarComponent[];
Search : any;
SearchResult : Array<any>;

  constructor(
    private route: ActivatedRoute,
    private moviesdbService: MoviesdbService,
   // private searchService : SearchService
    ) { }

  @Input() search : NavBarComponent;

  

  ngOnInit() {
    this.moviesdbService.getSearch(this.search.movie).subscribe(
      (data) => { this.Search = data;
        this.SearchResult = this.Search.results.map(e => { e.poster_path = "https://image.tmdb.org/t/p/w500" + e.poster_path; return e })
        console.log(this.SearchResult);
      })
    //this.getSearchResult();
    //this.handleSearch(this.Search);
    //this.handleSearch("pk");
    // this.moviesdbService.getSearch(this.movie).subscribe(
    //   (data) => {this.title = data;
    //   console.log(this.title);
        // this.SearchArray=data.results.map(e=>{e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path;return e})
        // console.log(this.SearchArray);
      
  }

 
  

}
