import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../Models/Post";
import {PostService} from "../../service/post-service/post.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) {
  }

  ngOnInit(): void {

  }

  onCreatePost(result: Post) {
    result.user = 'Tony Frontend';
    result.viewCount = 1;
    result.dateCreated = new Date();
    console.log("Result: " , result);
    this.postService.createPost(result).subscribe(result => {
      console.log("CreatePost: ", result)
    })

  }
}
