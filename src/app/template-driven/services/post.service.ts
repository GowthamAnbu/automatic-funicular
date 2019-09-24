import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl = `${environment.apiUrl}posts`;

  constructor(
    private http: HttpClient
  ) {}

  getPosts() {
    return this.http.get<Post[]>(this.postUrl);
  }

  getPost(id: string) {
    return this.http.get<Post>(`${this.postUrl}/${id}`);
  }

  deletePosts(id: number) {
    return this.http.delete<Post>(`${this.postUrl}/${id}`);
  }

  updatePosts(postToUpdate: Post) {
    return this.http.put<Post>(`${this.postUrl}/${postToUpdate.id}`, postToUpdate);
  }

  createPost(postToCreate: Post) {
    return this.http.post<Post>(`${this.postUrl}`, postToCreate);
  }
}
