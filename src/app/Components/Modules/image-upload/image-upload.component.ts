import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor() { }

  files: File[] = [];
  file: File;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  finalSave: boolean

  fileName: string = "No file selected";

  imageUrl: string | ArrayBuffer =
    "https://bulma.io/images/placeholders/480x480.png";

  ngOnInit(): void {
    this.croppedImage = ''
    this.finalSave = true
  }


  onSelect(event: any) {

    // if (event.rejectedFiles.length > 0) {
    // }
    this.files.push(...event.addedFiles);
    event.target = {
      files: event.addedFiles
    }
    this.fileChangeEvent(event);
    this.fileName = this.files[0].name;

  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    if (this.files.length == 0) {
      this.croppedImage = ''
      this.imageChangedEvent = null
    }
  }


  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        console.log('reader.result:', reader.result)
        this.imageUrl = reader.result;
      };
    }
  }

  fileChangeEvent(event: any): void {
    console.log('fileChangeEvent:', event)
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
    console.log('imageLoaded')
  }
  cropperReady() {
    // cropper ready
    console.log('cropperReady')
  }
  loadImageFailed() {
    // show message
    console.log('loadImageFailed')
  }

  displaylist() {
    this.finalSave = false
  }

  refresh(): void {
    window.location.reload();
  }

}
