import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit {

  postId: number | undefined;
  postTitle: string | undefined;
  body: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.postTitle = 'Test Title';

    this.postId = +this.route.snapshot.params['id'];

    this.body = "test";

  }

}
