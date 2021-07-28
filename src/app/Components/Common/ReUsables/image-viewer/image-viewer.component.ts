import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  @Input() croppedImage: any = '';
  @Input() heading: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
