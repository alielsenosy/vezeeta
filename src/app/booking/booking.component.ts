import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  closeResult = '';
  visit: any = {
    doctorName: '',
    specialty: '',
    date: '',
    doctorID: '',
    userId: '',
  };
  date: any;

  @Input() doctor: any = {};

  constructor(private modalService: NgbModal) {}

    // getData() {
  //   console.log(this.doctor.userName);
  //   console.log(this.doctor.specialty);
  //   console.log(this.date);
  // }

  createVisit() {
    this.visit.doctorName = this.doctor.doctorName;
    this.visit.specialty = this.doctor.specialty;

    // this.visit.doctorEmail = this.doctor.doctorEmail;
    this.visit.date = this.date;

    console.log(this.doctor);
    console.log(this.visit);
    console.log(this.doctor.doctorName);
    console.log(this.date);

    // console.log(this.visit.doctorName);
    // console.log(this.visit.doctorEmail);
    // console.log(this.visit.date);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
