import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorComponent } from './major.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/modules/shared.module';
import { HeaderComponent } from '../../components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: MajorComponent,
  },
];

@NgModule({
  declarations: [MajorComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajorModule {}
