// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Character } from '../character';
import { CharDetail } from '../char-detail';
import { CharacterService } from '../character.service';

import { Film } from '../film';


@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  // styleUrls: ['./char-detail.component.css']
  styleUrls: ['./char-detail.component.scss']
})


export class CharDetailComponent implements OnInit, OnChanges {

  @Input() character: Character;
  @Input() charDetail: CharDetail;

  charDetails: CharDetail;
  // charDetails: CharDetail[];


  constructor(
    private characterService: CharacterService,
  ) { }


  ngOnInit() { }


  ngOnChanges(changes: SimpleChanges) {

    // console.log('*** char-detail.component.ts - ngOnChanges - PING!!! ***');

    // console.log('char-detail.component.ts - ngOnChanges - this.character = ' + this.character);
    // console.log('char-detail.component.ts - ngOnChanges - this.charDetail = ' + this.charDetail);

    // console.log('char-detail.component.ts - ngOnChanges - this.charDetail = ' + this.charDetail);
    // console.log('char-detail.component.ts - ngOnChanges - this.charDetail = ' + JSON.stringify({ this.charDetail}));

    if (typeof changes['character'] !== 'undefined') {

      const change = changes['character'];

      if (!change.isFirstChange()) {

        console.log('*** char-detail.component.ts - ngOnChanges - PING 2!!! ***');

        // console.log('char-detail.component.ts - ngOnChanges - this.character = ' + this.character);
        // console.log('char-detail.component.ts - ngOnChanges - this.character = ' + JSON.stringify({ this.character}));

        // console.log('char-detail.component.ts - ngOnChanges - this.charDetail = ' + this.charDetail);
        // console.log('char-detail.component.ts - ngOnChanges - this.charDetail = ' + JSON.stringify({ this.charDetail}));

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

        // console.log('char-detail.component.ts - getCharDetail() charDetails = ' + charDetails);
        // console.log('char-detail.component.ts - getCharDetail() charDetails = ' + JSON.stringify({ charDetails}));
      });
  }

}
