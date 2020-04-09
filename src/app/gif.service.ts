import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) { }

   getTrendingGifs(){
    return this.http.get('http://api.giphy.com/v1/gifs/trending?api_key=SXcUYUeKYmkLK6ZqdjBAeG7QoZg7LLG5')
  }


}
