import {Router} from 'express';
import {Person} from '../Models/person.model';

export const people = Router();

// Basic get all route
people.get('/', (req, res, next) => {
    Person
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })  
})