import { Injectable } from '@angular/core';

import { Character } from './character';
import { CharDetail } from './char-detail';
import { Film } from './film';

// import { Observable } from 'rxjs';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  constructor(
    private http: HttpClient,
  ) { }


  public charListUrl = './assets/characters.json';  // URL to web api

  // getChars (): Observable<Character[]> {
  //   return this.http.get<Character[]>(this.charListUrl);
  // }

  getChars (): Observable<Character[]> {
    return this.http.get<Character[]>(this.charListUrl)
      .pipe(
        catchError(this.handleError('getChars', []))
      );
  }


  // getCharDetail (charDetailUrl): Observable<CharDetail> {
  //   return this.http.get<CharDetail>(charDetailUrl);
  // }

  getCharDetail (charDetailUrl): Observable<CharDetail> {
    return this.http.get<CharDetail>(charDetailUrl)
      .pipe(
        // catchError(this.handleError('getCharDetail', []))
        catchError(this.handleError('getCharDetail', charDetailUrl))
      );
  }


  // getFilmDetail (thisFilmUrl): Observable<Film> {
  //     return this.http.get<Film>(thisFilmUrl);
  // }

  getFilmDetail (thisFilmUrl): Observable<Film> {
    return this.http.get<Film>(thisFilmUrl)
    .pipe(
      catchError(this.handleError('getFilmDetail', thisFilmUrl))
    );
  }


  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error('PING!!! PING!!! PING!!!' + error); // log to console instead
      console.error('ERROR!!! ERROR!!! ERROR!!! ' + JSON.stringify(error)); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      console.log('result = ' + result);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
