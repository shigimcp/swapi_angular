import { Injectable } from '@angular/core';

// import { CharDetail } from './char-detail'
// import { CharacterService } from './character.service';

// import { Film } from './film'

// import { Observable, of } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})

export class CharDetailService {

  constructor(
    // private http: HttpClient,
    // private characterService: CharacterService,
  ) { }


  // getCharDetail (charDetailUrl): Observable<CharDetail[]> {

  //   console.log('char-detail.service.ts - charDetailUrl = ' + charDetailUrl);

  //   return this.http.get<CharDetail[]>(charDetailUrl);
  // }


  // getFilmDetail (thisFilmUrl): Observable<Film[]> {

  //   // console.log('character.service.ts - getFilmDetail (thisFilmUrl) - thisFilmUrl = ' + thisFilmUrl);
  //   // console.log('character.service.ts - getFilmDetail (thisFilmURL) - this.charDetails = ' + this.charDetails);
  //   // console.log('character.service.ts - getFilmDetail (thisFilmURL) - this.getCharDetail = ' + this.getCharDetail);

  //   return this.http.get<Film[]>(thisFilmUrl);
  // }

}
