import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styles: [`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: 100px;
      grid-column-gap: 100px;
    }
    .miscellaneous {
      cursor: pointer;
    }
  `]
})
export class PostsComponent implements OnInit{

  posts$: Observable<Post> = this.Http.get<Post>(`${environment.apiUrl}posts`);

  constructor(
    private Http: HttpClient
  ) {}

  ngOnInit() {}

}
