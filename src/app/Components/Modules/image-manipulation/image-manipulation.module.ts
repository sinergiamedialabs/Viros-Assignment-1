import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageManipulationComponent } from './image-manipulation.component';
import { ImageManipulationRoutingModule } from './image-manipulation-routing.module';

@NgModule({
  declarations: [ImageManipulationComponent],
  imports: [
    CommonModule,
    ImageManipulationRoutingModule

  ]
})
export class ImageManipulationModule { }
