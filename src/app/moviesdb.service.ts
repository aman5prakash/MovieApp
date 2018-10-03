import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesdbService {

  constructor(private http: HttpClient) { }

  getTrending()
  {
    return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=280752d0569c7d0c2dc3a72689118806");
  }

  getUpcoming()
  {
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=280752d0569c7d0c2dc3a72689118806&language=en-US&page=1");
  }

  getSearch()
  {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=280752d0569c7d0c2dc3a72689118806")
  }
}
