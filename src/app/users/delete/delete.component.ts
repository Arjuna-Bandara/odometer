import { Component, OnInit } from '@angular/core';
import { VehicleService} from '../../vehicle.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

}
