import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) { }


  getTrendingMovies():Observable<any>
  {
    return  this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=2c30450e95642098c36699bd7c81f075')
  }
  
  getTrendingTv():Observable<any>
  {
    return  this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=2c30450e95642098c36699bd7c81f075')
  }

 
}
