import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../Models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  apiUrlBase = 'http://localhost:4200/api/posts'

  public getAllPosts(): Observable<Post[]>{
    const apiUrl = `${this.apiUrlBase}/allPosts`;
    return this.httpClient.get<Post[]>(apiUrl);
  }

  public getPostById(id: number): Observable<Post>{
    const apiUrl = `${this.apiUrlBase}/post/${id}`;
    return this.httpClient.get<Post>(apiUrl);
  }

  public createPost(post: Post){
    const apiUrl = `${this.apiUrlBase}/createNewPost`;
    return this.httpClient.post(apiUrl, post);
  }

}
