import { NgModule } from '@angular/core';
import { ImageUploadComponent } from './image-upload.component';
import { ImageUploadRoutingModule } from './ImageUpload-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SharedModule } from '../../Common/ReUsables/shared.module';



@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    // CommonModule,
    ImageUploadRoutingModule,
    NgxDropzoneModule,
    ImageCropperModule,
    SharedModule
  ]
})
export class ImageUploadModule { }
