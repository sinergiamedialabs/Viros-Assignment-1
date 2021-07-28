import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './Components/Common/full/full.component';
// import { ImageViewerComponent } from './Components/Common/ReUsables/image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    // ImageViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
