import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms'
import { Router} from '@angular/router'
import { VehicleService} from '../../vehicle.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private vehicleService: VehicleService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group( {
      vehicleNo: ['', Validators.required],
      testResults: this.fb.array([
        this.getTestResult()
      ])
    });
  };

  getTestResult() {
    return this.fb.group({
      dateTime: ['', Validators.required],
      odometerReading: ['', Validators.required],
      vehicleColor: ['', Validators.required],
      engineNo: ['', Validators.required],
      chassisNo: ['', Validators.required],
    });
  };

  addTestResult() {
    const control = <FormArray>this.createForm.get('testResults');
    control.push(this.getTestResult());
  };

  removeTestResult(i: number) {
    const control = <FormArray>this.createForm.get('testResults');
    control.removeAt(i);
  };

  addVehicle(vehicleNo, testResults)
  {
    console.log(testResults.value)
    this.vehicleService.addVehicle(vehicleNo, testResults.value).subscribe(() => {
      this.router.navigate(['/read']);
    });
    // console.log(JSON.stringify(testResults.value));
  }

  ngOnInit() {
  }

}
