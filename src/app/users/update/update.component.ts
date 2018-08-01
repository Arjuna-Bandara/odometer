import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { VehicleService} from '../../vehicle.service';
import { Vehicle } from '../../vehicle.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: String;
  vehicle: any = {};
  updateForm: FormGroup;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

}
