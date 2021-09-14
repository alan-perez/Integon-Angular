import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { } //por inyeccion de dependencias agreo el objeto HttpClient

  private url = "https://jsonplaceholder.typicode.com/posts";

getPosts():Observable<Post[]> {
 let posts = this.httpClient.get<Post[]>(this.url);
 return posts;
}


}
