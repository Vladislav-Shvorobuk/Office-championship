import { Component, OnInit, ViewChild } from '@angular/core';
import { StandingModalComponent } from '../standing-modal/standing-modal.component';
import { ApplyLinkModalComponent } from '../apply-link-modal/apply-link-modal.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild(StandingModalComponent) standingModal: StandingModalComponent;
  @ViewChild(ApplyLinkModalComponent) applyLinkModal: ApplyLinkModalComponent;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.info('INFO: header/component');
  }

  open(modalWindowName) {
    if (modalWindowName === 'standing') {
      this.standingModal.open();
    } else if (modalWindowName === 'applyLink') {
      this.applyLinkModal.open();
    }
  }

  logOut() {
    this.authService.signOut();
  }
}
