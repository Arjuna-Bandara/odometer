import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { };

  getVehicles() {
    return this.http.get(`${this.uri}/vehicles`);
  };

  getVehicleById(id) {
    return this.http.get(`${this.uri}/vehicles/${id}`);
  };

  addVehicle(vehicleNo, testResults) {
    const vehicle = {
      vehicleNo: vehicleNo,
      testResults: testResults
    };
    // console.log(vehicle)
    return this.http.post(`${this.uri}/vehicles/add`, vehicle);
  };

  updateVehicle(id, vehicleNo, testResults) {
    const vehicle = {
      vehicleNo: vehicleNo,
      testResults: testResults
    };
    return this.http.post(`${this.uri}/vehicles/update/${id}`, vehicle);
  };

  deleteVehicle(id) {
    return this.http.get(`${this.uri}/vehicles/delete/${id}`);
  }
}
