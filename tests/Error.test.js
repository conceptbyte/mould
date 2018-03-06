import { test } from 'ava';
import Error from '../src/Error';
import InvalidDataError from '../src/errors/InvalidDataError';

test.only('It creates a errors object', (t) => {
    let errors = new Error;
    t.truthy(String(errors) == 'errors');
});

test.only('It parses error objects', (t) => {
    t.plan(1);

    let error = new Error;
    let invalidError = new InvalidDataError();
    error = error.parse([invalidError]);
    t.deepEqual(error, [invalidError]);
});

test.only('It throws an exception if an invalid data type is passed', (t) => {
    t.plan(1);

    let invalid = new Error;
    let error = t.throws(() => {
        invalid.parse({});
    }, InvalidDataError);
});
