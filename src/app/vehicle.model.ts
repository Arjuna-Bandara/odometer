export interface Vehicle {
    id: String;
    vehicleNo:String;
	testResults: [{
        dateTime: String,
        odometerReading: Number,
        vehicleColor: String,
        engineNo: String,
        chassisNo:	String
    }];
};