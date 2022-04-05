import { Component, OnInit } from '@angular/core';
import {Post} from "../../Models/Post";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  blogPosts: Post[] = [];



  ngOnInit(): void {

    this.blogPosts = this.createMockPosts(1,20);

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

}
