import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../service/post-service/post.service";
import {Post} from "../../../Models/Post";

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit {

  postId: number | undefined;

  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {

    this.postId = +this.route.snapshot.params['id'];

    this.postService.getPostById(this.postId).subscribe(result => {
      this.post = result;
    });

  }

}
