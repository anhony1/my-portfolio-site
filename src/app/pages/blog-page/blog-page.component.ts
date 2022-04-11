import { Component, OnInit } from '@angular/core';
import {Post} from "../../Models/Post";
import {Observable} from "rxjs";
import {PostService} from "../../service/post-service/post.service";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  constructor(private postService: PostService) { }

  blogPosts: Post[] = [];

  ngOnInit(): void {

    // this.blogPosts = this.createMockPosts(1,20);
    this.getPostData();

  }

  createMockPosts(from: number, to: number): Post[] {
    const returnList: Post[] = [];
    for(let i = from; i <= to; i++){
      returnList.push({
        id: i,
        title: 'long blogpost title for us to see' + i,
        author: 'tony'
      })
    }
    return returnList;
  }

  getPostData(){
    this.postService.getAllPosts().subscribe(result => {
      console.log("result", result);
      this.blogPosts = result;
    })
  }

}
