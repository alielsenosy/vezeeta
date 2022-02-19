import { Component, OnInit } from '@angular/core';
import  doctorsJson  from '../../assets/list-doctors.json';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

interface DOCTOR {
  name: string;
  fees: number;
  Specialty: string;
  profilePic: string;
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})

export class DoctorsComponent {

  title = 'Import JSON Data from Assets Folder';

  listOfdoctors: DOCTOR[] = doctorsJson;

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = false;
  }

}
