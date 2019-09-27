// * link https://medium.com/@shairez/a-super-ninja-trick-to-learn-rxjss-switchmap-mergemap-concatmap-and-exhaustmap-forever-88e178a75f1b
import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { tap, map, mergeMap, switchMap, concatMap, exhaustMap, finalize } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    // this.subscribingInnerObservableLongVersion();
    // this.subscribingInnerObservableLongVersionSwitchMap();
    // this.subscribingInnerObservableLongVersionConcatMap();
    // this.subscribingInnerObservableLongVersionExhaustMap();
    this.subscribingInnerObservableShortVersion();
  }

  // normal map with subscribing to the inner observable - flattening - long version
  // - MERGE MAP - it does nothing other than flattening which is also done by all of it brothers
  subscribingInnerObservableLongVersion() {
    this.mapService.movies$.pipe(
      map(e => this.mapService.relatedmovies$),
      tap((obs: any) => {
        obs.subscribe(ob => console.log(`...${ob}...`));
      }),
    )
    .subscribe();
  }

  subscribingInnerObservableLongVersionSwitchMap() {
    let innerStream: Subscription;
    this.mapService.movies$.pipe(
      tap(movie => {
        if (innerStream) {
          innerStream.unsubscribe();
        }
      }),
      map(movie => this.mapService.relatedmovies$),
      tap((relatedMovies) => {
        innerStream = relatedMovies.subscribe(ob => console.log(`...${ob}...`));
      }),
    )
    .subscribe();
  }

  // TODO have to try later :(  after completing the course
  subscribingInnerObservableLongVersionConcatMap() {
    let inCompleteinnerStreams: Observable<any>[];
    let innerObservableCompleted = true;
    this.mapService.movies$.pipe(
      map(e => this.mapService.relatedmovies$),
      tap((inner: Observable<any>) => {
        if (innerObservableCompleted) {
          inner
          .subscribe(ob => {
            innerObservableCompleted = false;
            console.log(`...${ob}...`);
          }, (error) => {

          },
          () => {
            innerObservableCompleted = true;
          });
        } else {
          inCompleteinnerStreams.push(inner);
        }
      }),
    )
    .subscribe();
  }

// done and dusted :)
  subscribingInnerObservableLongVersionExhaustMap() {
    let isInnerStreamCompleted = true;
    this.mapService.movies$.pipe(
      map(e => this.mapService.relatedmovies$),
      tap((obs: any) => {
        if (isInnerStreamCompleted) {
          obs.subscribe(ob => {
            console.log(`...${ob}...`);
            isInnerStreamCompleted = false;
          },
          (err) => {},
          () => isInnerStreamCompleted = true);
        }
      }),
    )
    .subscribe();
  }

  // mergeMap, switchMap, concatMap, exhaustMap can be used here as well since this doesn't change the context of our example.
  subscribingInnerObservableShortVersion() {
    this.mapService.movies$.pipe(
      exhaustMap(e => this.mapService.relatedmovies$),
      tap(ob => console.log(`...${ob}...`)),
    )
    .subscribe();
  }

}
