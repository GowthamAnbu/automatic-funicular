import { Injectable } from '@angular/core';
import { of, from, timer, interval } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  movies = [
    {
      id: 1,
      name: 'Back to the future',
      relatedmovies: [
        1, 2, 3, 4
      ]
    },
    {
      id: 2,
      name: 'Artist',
      relatedmovies: [
        1, 2, 3, 4
      ]
    }
  ];


  movies$ = interval(5000)
    .pipe(
      take(2),
      map(index => this.movies[index]),
      tap(m => console.log(`INCOMING - ${m.name}`)),
    );

  relatedmovies$ = interval(1000)
  .pipe(
    take(15)
  );
    // .pipe(
    //   tap(() => console.log('.............')),
    // );

}

