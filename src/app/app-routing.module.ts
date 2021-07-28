import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './Components/Common/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/imageprocessing', pathMatch: 'full' },
      { path: 'imageprocessing', loadChildren: () => import('./Components/Modules/ImageProcessing-routing.module').then(m => m.ImageProcessingRoutingModule) },
    ]
  },
  {
    path: 'imageprocessing', loadChildren: () => import('./Components/Modules/ImageProcessing-routing.module').then(m => m.ImageProcessingRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
