// * link https://medium.com/@shairez/a-super-ninja-trick-to-learn-rxjss-switchmap-mergemap-concatmap-and-exhaustmap-forever-88e178a75f1b
import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { tap, map, mergeMap, switchMap, concatMap, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.subscribingInnerObservableLongVersion();
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

  // mergeMap, switchMap, concatMap, exhaustMap can be used here as well since this doesn't change the context of our example.
  subscribingInnerObservableShortVersion() {
    this.mapService.movies$.pipe(
      mergeMap(e => this.mapService.relatedmovies$),
      tap(ob => console.log(`...${ob}...`)),
    )
    .subscribe();
  }



}
