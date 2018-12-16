import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Character } from '../character';
import { CharacterService } from '../character.service';

import { CharDetail } from '../char-detail';

import { Film } from '../film';
// import { forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-film-container',
  templateUrl: './film-container.component.html',
  // styleUrls: ['./film-container.component.css']
  styleUrls: ['./film-container.component.scss']
})


export class FilmContainerComponent implements OnInit, OnChanges {

  @Input() character: Character;
  @Input() charDetail: CharDetail;

  charDetails: CharDetail;
  // charDetails: CharDetail[];

  thisFilmDetail: Film;
  // thisFilmDetail: Film[];

  // filmDetails: Film[];
  filmDetails: Film[] = [];

  // objectKeys = Object.keys;


  constructor(
    private characterService: CharacterService,
    // private charDetailService: CharDetailService
  ) { }


  ngOnInit() { }


  ngOnChanges(changes: SimpleChanges) {

    // console.log('*** film-container.component.ts - ngOnChanges - PING!!! ***');

    // console.log('film-container.component.ts - ngOnChanges - this.character = ' + this.character);
    // console.log('film-container.component.ts - ngOnChanges - this.charDetail = ' + this.charDetail);

    // console.log('film-container.component.ts - ngOnChanges - this.charDetail = ' + this.charDetail);
    // console.log('film-container.component.ts - ngOnChanges - this.charDetail = ' + JSON.stringify({ this.charDetail }));

    if (typeof changes['character'] !== 'undefined') {

      const change = changes['character'];

      if (!change.isFirstChange()) {

        console.log('*** film-container.component.ts - ngOnChanges - PING 2!!! ***');

        // console.log('film-container.component.ts - ngOnChanges - this.character = ' + this.character);
        // console.log('film-container.component.ts - ngOnChanges - this.charDetail = ' + this.charDetail);

        // console.log('film-container.component.ts - ngOnChanges - this.charDetail = ' + this.charDetail);
        // console.log('film-container.component.ts - ngOnChanges - this.charDetail = ' + JSON.stringify({ this.charDetail }));

        this.getCharDetail();
      }
    }
  }


  getCharDetail(): void {
    // console.log('*** char-detail.component.ts - getCharDetail() - PING!!! ***');

    this.characterService.getCharDetail(this.character.url)
      .subscribe((charDetails: CharDetail) => {
      // .subscribe((charDetails: CharDetail[]) => {
        this.charDetails = charDetails;

        this.getFilmDetail();

        // if (typeof charDetails !== 'string') {
        //   console.log('char-detail.component.ts - getCharDetail() charDetails = ' + JSON.stringify({ charDetails }));
        //   this.getFilmDetail();
        // } else {
        //   console.log('char-detail.component.ts - getCharDetail() charDetails = ' + JSON.stringify({ charDetails }));
        // }


        // console.log('char-detail.component.ts - getCharDetail() charDetails = ' + JSON.stringify({ charDetails }));
        // // console.log('char-detail.component.ts - getCharDetail() typeof{ charDetails } = ' + typeof{ charDetails });
        // console.log('char-detail.component.ts - getCharDetail() typeof charDetails = ' + typeof charDetails);

        // console.log('char-detail.component.ts - getCharDetail() charDetails = ' + charDetails);
        // console.log('char-detail.component.ts - getCharDetail() charDetails = ' + JSON.stringify({ charDetails }));
      });
  }


  getFilmDetail (): void {

    console.log('*** film-container.component.ts - getFilmDetail(thisCharDetails) - PING!!! ***');

    // console.log('film-container.component.ts - getFilmDetail() - this.charDetails = ' + this.charDetails);
    // console.log('film-container.component.ts - getFilmDetail() - this.charDetails = ' + JSON.stringify({ this.charDetails }));


    // if (typeof this.charDetails !== 'string') {
    //   console.log('char-detail.component.ts - getFilmDetail() this.charDetails = ' + JSON.stringify(this.charDetails));
    // } else {
    //   console.log('char-detail.component.ts - getFilmDetail() this.charDetails NOPE! = ' + JSON.stringify(this.charDetails));
    // }


    this.filmDetails = [];

    if (typeof this.charDetails !== 'string') {
      for (const filmURL of this.charDetails.films) {

        this.characterService.getFilmDetail(filmURL)
          .subscribe((thisFilmDetail: Film) => {
            this.thisFilmDetail = thisFilmDetail;
            this.filmDetails.push(this.thisFilmDetail);

            // console.log('char-detail.component.ts - getFilmDetail() this.thisFilmDetail = ' + this.thisFilmDetail);
            // console.log('char-detail.component.ts - getFilmDetail() this.thisFilmDetail = ' + JSON.stringify({ this.thisFilmDetail }));

            // console.log('char-detail.component.ts - getFilmDetail() this.filmDetails = ' + this.filmDetails);
            // console.log('char-detail.component.ts - getFilmDetail() this.filmDetails = ' + JSON.stringify({ this.filmDetails }));
          });
      }
    } else {
      console.log('char-detail.component.ts - getFilmDetail() this.filmDetails NOPE! = ' + this.filmDetails);
      console.log('char-detail.component.ts - getFilmDetail() this.charDetails NOPE! = ' + JSON.stringify(this.charDetails));
    }

    // console.log('char-detail.component.ts - getFilmDetail() this.filmDetails = ' + this.filmDetails);
    // console.log('char-detail.component.ts - getFilmDetail() this.filmDetails = ' + JSON.stringify({ this.filmDetails }));
  }

}
