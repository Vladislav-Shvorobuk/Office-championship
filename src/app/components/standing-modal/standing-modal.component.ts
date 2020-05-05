import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-standing-modal',
  templateUrl: './standing-modal.component.html',
  styleUrls: ['./standing-modal.component.scss']
})
export class StandingModalComponent implements OnInit {
  @ViewChild('createStandingContent') content: ElementRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    console.info('INFO: standing-modal/component');
  }

  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
      (result) => {
        console.info(`Closed with: ${result}`);
      },
      (reason) => {
        console.info(`Dismissed ${this.getDismissReason(reason)}`);
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
