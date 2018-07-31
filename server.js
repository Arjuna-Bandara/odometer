import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Vehicle from './models/Vehicle'
//import { next } from './node_modules/@types/q';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/vehicles');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB db connection established.');
});



router.route('/vehicles').get((req, res) => {
    Vehicle.find((err, vehicles) => {
        if (err) 
        {
            console.log(err);
        }
        else
        {
            res.json(vehicles)
        }
    });
});

router.route('/vehicles/:id').get((req, res) => {
    Vehicle.findById(req.params.id, (err, vehicle) => {
        if (err) 
        {
            console.log(err);
        }
        else
        {
            res.json(vehicle)
        }
    });
});

router.route('/vehicles/add').post((req, res) => {
    let vehicle = new Vehicle(req.body);
    vehicle.save()
        .then(vehicle => {
            console.log(req.body);
            res.status(200).json({'vehicle': 'Added succesfully'});
        })
        .catch(err => {
            res.status(400).send('Failed');
        });

});

router.route('/vehicles/update/:id').post((req, res) => {
    Vehicle.findById(req.params.id, (err, vehicle) => {
        if (!vehicle)
            return next(new Error('Could not load vehicle'));
        else
        {
            vehicle.vehicleNo = req.body.vehicleNo;
            vehicle.testResults.push(req.body.testResults);

            vehicle.save().then(vehicle => {
                res.json('Updated');
            }).catch(err => {
                res.status(400).send('failed');
            });
        }
    });
});

router.route('/vehicles/delete/:id').get((req, res) => {
    Vehicle.findByIdAndRemove({_id: req.params.id}, (err, vehicle) => {
        if (err)
            res.json(err);
        else
            res.json('Removed');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express running at port 4000'));