import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageManipulationComponent } from './image-manipulation.component';

const routes: Routes = [{ path: '', component: ImageManipulationComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule],
})
export class ImageManipulationRoutingModule { }
