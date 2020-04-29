import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorComponent } from './major.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MajorComponent,
  },
];

@NgModule({
  declarations: [
    MajorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MajorModule {}
