import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { GifService } from './gif.service';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }