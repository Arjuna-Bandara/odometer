import { Component, OnInit } from '@angular/core';
import { VehicleService} from '../../vehicle.service';
import { Router} from '@angular/router';
import { MatTableDataSource} from '@angular/material';

import { Vehicle} from '../../vehicle.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  vehicles: Vehicle[];
  displayedColumns = ['vehicleNo', 'testResults', 'actions'];

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
    this.fetchVehicles();
  }

  fetchVehicles() {
    this.vehicleService
      .getVehicles()
      .subscribe((data: Vehicle[]) => {
        this.vehicles = data;
        console.log('Data requested ...');
        console.log(this.vehicles);
      });
  }

  editVehicle(id) {
    this.router.navigate([`/update/${id}`]);
  };

  deleteVehicle(id) {
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.fetchVehicles();
    });
  }
}
