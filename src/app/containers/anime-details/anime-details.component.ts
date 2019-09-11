import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})

export class AnimeDetailsComponent implements OnInit {

  episodes: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
    .pipe(
      switchMap(param => this.http.get(`https://api.jikan.moe/v3/anime/${param.id}/episodes`)),
    )
    .subscribe((r: any) => {
      this.episodes = r.episodes;
    });
  }

  open(url) {
    window.open(url, '_blank');
  }
}
