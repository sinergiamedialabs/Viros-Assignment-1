import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'imageprocessing',
  //   loadChildren: () => import('./image-manipulation/image-manipulation.module').then(m => m.ImageManipulationModule),
  // },
  {
    path: '',
    loadChildren: () => import('./image-upload/image-upload.module').then(m => m.ImageUploadModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule],
})
export class ImageProcessingRoutingModule { }
