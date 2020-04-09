import { Component, OnInit } from '@angular/core';
import { Gifs } from '../gifs';
import { GifService } from '../gif.service';
import { HttpClient } from '@angular/common/http'//import to help make the search call

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  link = 'http://api.giphy.com/v1/gifs/search?api_key=SXcUYUeKYmkLK6ZqdjBAeG7QoZg7LLG5&q='
  //created an array to capture all dat being called by the url
  gifs = [];

  constructor(public gifservice: GifService, public http: HttpClient) {//add http to constructor

    this.getGif();
  }
  getGif() {
    this.gifservice.getTrendingGifs().subscribe(data => {
      //obj data will return data from url called on by the fn defined in service
      this.gifs = data["data"];
      console.log(this.gifs);
    });
  }

  performSearch(searchTerm: HTMLInputElement): void {//collects user data and adds the input the the api link and returns a new variable with the results. The results overide the trending gifs automatically.
    var apiLink = this.link + searchTerm.value;

    this.http.get(apiLink).subscribe(response =>{
        this.gifs = response["data"];
        console.log(this.gifs);
      });
  }

  ngOnInit() {

  }
}