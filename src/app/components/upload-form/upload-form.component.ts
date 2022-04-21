import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FileUpload} from "../../Models/file-upload.model";
import {FileUploadService} from "../../service/file-upload-service/file-upload.service";

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit, AfterViewInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(private uploadService: FileUploadService) { }

  ngAfterViewInit(): void {
    // $('.dropify').dropify();
  }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {

      const file: File | null = this.selectedFiles.item(0);

      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        console.log('current', this.currentFileUpload);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          }
        );
      }


    }
  }


}
