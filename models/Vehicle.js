import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Vehicle = new Schema({
    vehicleNo: {
        type: String
    },
	testResults: [{
        dateTime: String,
        odometerReading: Number,
        vehicleColor: String,
        engineNo: String,
        chassisNo:	String
    }]		
});

// var vehicleModel = mongoose.model('vehicle', Vehicle)

export default mongoose.model('Vehicle', Vehicle);