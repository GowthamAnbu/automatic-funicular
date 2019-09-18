import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) {}

  getPosts() {
    return this.http.get<Post[]>(`${environment.apiUrl}posts`);
  }

  deletePosts(id: number) {
    return this.http.delete<Post>(`${environment.apiUrl}posts/${id}`);
  }

  updatePosts(post: Post) {
    return this.http.put<Post>(`${environment.apiUrl}posts/${post.id}`, post);
  }
}
