import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/template-driven/models/post';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styles: [`
  `]
})
export class PostFormComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(param => this.http.get(`${environment.apiUrl}posts/${param.id}`)),
    ).subscribe((post: Post) => this.post = post);
  }
}
