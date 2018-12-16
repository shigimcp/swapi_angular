// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
// import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Character } from '../character';
import { CharDetail } from '../char-detail';
import { CharacterService } from '../character.service';

// import { Film } from '../film';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  // styleUrls: ['./characters.component.css']
  styleUrls: ['./characters.component.scss']
})


export class CharactersComponent implements OnInit {

  @Input() character: Character;
  @Input() charDetail: CharDetail;

  selectedChar: Character;
  charList: Character[];


  constructor(
    private http: HttpClient,
    private characterService: CharacterService,
  ) { }


  ngOnInit() {
    this.getChars();
  }


  onSelect(character: Character): void {

    // console.log('*** characters.component.ts - onSelect(character: Character) - PING!!! ***');

    // console.log('characters.component.ts - onSelect - character.name = ' + character.name + '     character.url = ' + character.url);
    // console.log('characters.component.ts - onSelect - character = ' + JSON.stringify({ character}));

    this.selectedChar = character;
  }


  getChars(): void {

    // this.http.get<Character[]>(this.charListUrl)
    //   // .subscribe(data => {console.log('characters.component.ts - data = ' + JSON.stringify(data))});
    //   // .subscribe((charList: Character[]) => this.charList = charList);
    //   .subscribe((charList: Character[]) => {
    //     this.charList = charList;

    //     console.log('characters.component.ts - getChars() - charList = ' + JSON.stringify({ charList }));
    //     // console.log('characters.component.ts - getChars() - this.charList = ' + JSON.stringify({ this.charList }));

    //     // this.getThumbnails(this.charList);
    //   });


    this.characterService.getChars()
      .subscribe((charList: Character[]) => {
        this.charList = charList;
        // console.log('characters.component.ts - getChars() - charList = ' + JSON.stringify({ charList }));
        // this.getThumbnails(this.charList);
        });

  }


  getThumbnails(thisCharlist): void {
    // console.log('characters.component.ts - getThumbnails(thisCharlist) - thisCharlist = ' + JSON.stringify({ thisCharlist}));

    for (const thisCharacter of thisCharlist.characters) {
      // console.log('characters.component.ts - getThumbnails(thisCharlist) - thisCharacter = ' + thisCharacter);
      console.log('characters.component.ts - getThumbnails(thisCharlist) - thisCharacter = ' + JSON.stringify({ thisCharacter}));
      // console.log('characters.component.ts - getThumbnails(thisCharlist) - thisCharacter.name = ' + thisCharacter.name);

      // let thisThumbID;
      // let thisThumb;

      // switch (thisCharacter.name) {
      //   case 'Luke Skywalker':
      //     thisThumbID = 'charThumbID' + thisCharacter.name;

      //     thisThumb = document.createElement('img');
      //     thisThumb.classList.add('charThumb');
      //     thisThumb.id = thisThumbID;
      //     thisThumb.src = '../../assets/images/characters/luke.jpg';
      //     thisThumb.setAttribute('onclick', 'onSelect(\'' + thisCharacter.url + '\'); return false;');

      //     console.log('Hi! My name is ' + thisCharacter.name + '. My thumb ID is ' + thisThumbID + '.');

      //     // document.getElementById('charContainerID').appendChild(thisThumb);
      //   break;

      //   case 'Darth Vader':
      //     thisThumbID = 'charThumbID' + thisCharacter.name;

      //     thisThumb = document.createElement('img');
      //     thisThumb.classList.add('charThumb');
      //     thisThumb.id = thisThumbID;
      //     thisThumb.src = '../../assets/images/characters/vader.jpg';
      //     thisThumb.setAttribute('onclick', 'onSelect(\'' + thisCharacter.url + '\'); return false;');

      //     console.log('Hi! My name is ' + thisCharacter.name + '. My thumb ID is ' + thisThumbID + '.');

      //     // document.getElementById('charContainerID').appendChild(thisThumb);
      //   break;

      //   case 'Obi-wan Kenobi':
      //     thisThumbID = 'charThumbID' + thisCharacter.name;

      //     thisThumb = document.createElement('img');
      //     thisThumb.classList.add('charThumb');
      //     thisThumb.id = thisThumbID;
      //     thisThumb.src = '../../assets/images/characters/obiwan.jpg';
      //     thisThumb.setAttribute('onclick', 'onSelect(\'' + thisCharacter.url + '\'); return false;');

      //     console.log('Hi! My name is ' + thisCharacter.name + '. My thumb ID is ' + thisThumbID + '.');

      //     // document.getElementById('charContainerID').appendChild(thisThumb);
      //   break;

      //   case 'R2-D2':
      //     thisThumbID = 'charThumbID' + thisCharacter.name;

      //     thisThumb = document.createElement('img');
      //     thisThumb.classList.add('charThumb');
      //     thisThumb.id = thisThumbID;
      //     thisThumb.src = '../../assets/images/characters/r2d2.jpg';
      //     thisThumb.setAttribute('onclick', 'onSelect(\'' + thisCharacter.url + '\'); return false;');

      //     console.log('Hi! My name is ' + thisCharacter.name + '. My thumb ID is ' + thisThumbID + '.');

      //     // document.getElementById('charContainerID').appendChild(thisThumb);
      //   break;

      //   default:
      //     console.log('OMG! WHO AM I?!?!?! AND I HAVE NO ID!!!');
      // }

    }

  }

}
