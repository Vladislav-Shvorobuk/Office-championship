import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NgbModule],
  providers: [AuthGuard],
  exports: [FooterComponent, NgbModule],
})
export class SharedModule {}
