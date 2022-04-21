import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";

class FileUpload {
  key: string | undefined;
  name: string | undefined;
  url: string | undefined;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}

@Component({
  selector: 'app-port-page',
  templateUrl: './port-page.component.html',
  styleUrls: ['./port-page.component.scss']
})
export class PortPageComponent implements OnInit {
  private ref: any;
  private task: any;
  private uploadProgress: Observable<any> | undefined;

  title = 'Test the Test!';

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase,) { }

  filePath: String | undefined;

  ngOnInit(): void {

  }

  upload($event: Event) {
    if($event && $event.target){
      // @ts-ignore
      this.filePath = $event.target.files[0]
    }
  }
  uploadImage(){
    console.log(this.filePath)
    this.storage.upload('/images'+Math.random()+this.filePath, this.filePath);
  }

}
