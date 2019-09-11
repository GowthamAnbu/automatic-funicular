import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  animes: any;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://api.jikan.moe/v3/top/anime/1/tv')
    .subscribe((r: any) => {
      this.animes = r.top;
    });
  }

  goto({mal_id: id}) {
    this.router.navigateByUrl(`anime-details/${id}`);
  }
}
