import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-jovenez',
  templateUrl: './jovenez.component.html',
  styleUrls: ['./jovenez.component.css']
})
export class JovenezComponent implements OnInit {

  cat: string | any;

  Post: Post[] = [];

  constructor(public PostService: PostService) { }

  ngOnInit(): void {
    this.getPost(localStorage.getItem("category")!);
  }

  getPost(_category: string){
    this.PostService.getPostByCategory(_category).subscribe(
      res => {
        this.PostService.Post = res;
        console.log(res);
      },
      err => console.log(err)
      );
    }

    selectedPost(post: Post){
      this.PostService.selectedPost = localStorage.setItem('Post', JSON.stringify(post));
    }
    selectedCategory(category: string){
      localStorage.setItem('category', category);
      window.location.reload()
    }
    public sendEmail(e: Event) {
      e.preventDefault();
      emailjs.sendForm('service_og3xa2p', 'template_xvn4qq9', e.target as HTMLFormElement, '7BRIxqPNOTWLRAe_9')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
}
