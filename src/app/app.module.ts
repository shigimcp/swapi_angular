import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CharactersComponent } from './characters/characters.component';
import { CharDetailComponent } from './char-detail/char-detail.component';
import { FilmContainerComponent } from './film-container/film-container.component';

// import { CharacterService } from './character.service';

import { FilmDirective } from './film.directive';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharDetailComponent,
    FilmContainerComponent,
    FilmDirective
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
  ],

  providers: [],
  // providers: [CharacterService],
  bootstrap: [AppComponent],

  entryComponents: [FilmContainerComponent]
})

export class AppModule { }
