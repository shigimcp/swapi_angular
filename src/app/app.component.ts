import { Component } from '@angular/core';

import { Character } from './character';
import { CharDetail } from './char-detail';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'SHIGIMCP - SWAPI Pre-Interview Code Project - (Angular 6)';

  selectedChar: Character;
  selectedCharDetail: CharDetail;
}
