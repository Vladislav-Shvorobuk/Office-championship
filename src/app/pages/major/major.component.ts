import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StandingModalComponent } from '../../components/standing-modal/standing-modal.component';
import { ApplyLinkModalComponent } from '../../components/apply-link-modal/apply-link-modal.component';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss'],
})
export class MajorComponent implements OnInit {

  @ViewChild(StandingModalComponent) standingModal: StandingModalComponent;
  @ViewChild(ApplyLinkModalComponent) applyLinkModal: ApplyLinkModalComponent;

  ngOnInit(): void {
    console.info('INFO: major/component');
  }

  open(modalWindowName) {
    if (modalWindowName === 'standing') {
      this.standingModal.open();
    } else if (modalWindowName === 'applyLink') {
      this.applyLinkModal.open();
    }
  }
}
