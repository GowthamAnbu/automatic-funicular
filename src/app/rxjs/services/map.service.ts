import { Injectable } from '@angular/core';
import { of, from, timer, interval, Observable } from 'rxjs';
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
    },
    {
      id: 3,
      name: 'New one',
      relatedmovies: [
        1, 2, 3, 4
      ]
    }
  ];


  movies$: Observable<any> = interval(5000)
    .pipe(
      take(this.movies.length),
      map(index => this.movies[index]),
      tap(m => console.log(`INCOMING - ${m.name}`)),
    );

  relatedmovies$: Observable<number> = interval(1000)
  .pipe(
    take(2)
  );
    // .pipe(
    //   tap(() => console.log('.............')),
    // );

}

