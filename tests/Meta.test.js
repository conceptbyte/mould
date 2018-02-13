import { test } from 'ava';
import Meta from '../src/Meta';
import InvalidDataError from '../src/errors/InvalidDataError';

test('It creates a meta object', (t) => {
    let meta = new Meta;
    t.truthy(String(meta) == 'meta');
});

test('It parses meta data objects', (t) => {
    t.plan(1);

    let meta = new Meta;
    meta = meta.parse({ one:1, two: 2 });
    t.deepEqual(meta, { one: 1, two: 2 });
});

test('It throws an exception if an invalid data type is passed', (t) => {
    t.plan(2);

    let invalid = new Meta;

    // It throws correct exception for invalid data
    let error = t.throws(() => {
        invalid.parse('something');
    }, InvalidDataError);

    // The message is generic for all data types
    t.truthy(error.message === 'Invalid data type for model(s)');
});
