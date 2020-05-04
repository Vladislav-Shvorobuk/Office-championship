import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NgbModule],
  exports: [FooterComponent, NgbModule],
})
export class SharedModule {}
