import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import Vehicle from '../../../../models/Vehicle';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'


import { VehicleService } from './../../vehicle.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  regNo: String;
  vehicle: any = {};
  searchForm: FormGroup;

  constructor(private vehicleService: VehicleService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.searchForm = this.fb.group( {
      vehicleNo: ['', Validators.required],
    });
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.regNo = params.regNo;
    //   this.vehicleService.getVehicleByReg(this.regNo).subscribe(res => {
    //     this.vehicle = res;
    //     console.log(res);
    //   })
    // })
  };

  search(regNo) {
    this.vehicleService.getVehicleByReg(regNo).subscribe((data: Vehicle) => {
      console.log('Vehicle found!');
      this.vehicle = data;
      console.log(this.vehicle);
    })
  }

}
