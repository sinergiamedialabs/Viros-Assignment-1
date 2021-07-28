import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadComponent } from './image-upload.component';

const routes: Routes = [{ path: '', component: ImageUploadComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule],
})
export class ImageUploadRoutingModule { }
