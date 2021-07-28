import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';



@NgModule({
  declarations: [ImageViewerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ImageViewerComponent
  ]
})
export class SharedModule { }
