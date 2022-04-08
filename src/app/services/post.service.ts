import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  URL_API = 'https://ser-backend.herokuapp.com/api';
  URL_API2 = 'https://ser-backend.herokuapp.com/';

  constructor(private http: HttpClient) {}

  selectedPost: any | Post = {
    name: '',
    description: '',
    shortdescription: '',
    mision: '',
    vision: '',
    contact: '',
    imgurl: '',
    category: '',
  };

  Post: Post[] | any;

  getPost() {
    return this.http.get<Post[]>(this.URL_API);
  }

  getOnePostById(_id: String){
    return this.http.get<Post[]>(`${this.URL_API}/${_id}`);
  }

  getPostByCategory(_category: string){
    return this.http.get<Post[]>(`${this.URL_API2}/${_category}`);
  }
}
