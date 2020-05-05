import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorComponent } from './major.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/modules/shared.module';
import { HeaderComponent } from '../../components/header/header.component';
import {StandingModalComponent} from '../../components/standing-modal/standing-modal.component';
import {ApplyLinkModalComponent} from '../../components/apply-link-modal/apply-link-modal.component';

const routes: Routes = [
  {
    path: '',
    component: MajorComponent,
  },
];

@NgModule({
  declarations: [
    MajorComponent,
    HeaderComponent,
    StandingModalComponent,
    ApplyLinkModalComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajorModule {}
