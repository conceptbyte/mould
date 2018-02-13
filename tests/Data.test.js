import { test } from 'ava';
import Data from '../src/Data';

test('It creates a data object', (t) => {
    let data = new Data;
    t.truthy(String(data) == 'data');
});

test('It parses a collection of models', (t) => {
    t.plan(3);

    // A collection of resources is returned as an array of objects
    let collection = new Data;
    collection = collection.parse([{ id: 'ab', type: 'sample', one: 1, two: 2 }]);
    t.deepEqual(
        collection,
        [{ id: 'ab', type: 'sample', attributes: { one: 1, two: 2 }}]
    );

    // A single resource identifier only returns id and type as object
    let identifier = new Data;
    identifier = identifier.parse([{ id: 'ab', type: 'sample' }]);
    t.deepEqual(identifier, [{ id: 'ab', type: 'sample' }]);

    // An empty array is retured as an empty array
    let empty = new Data;
    empty = empty.parse([]);
    t.deepEqual(empty, []);
});

test('It parses a single model', (t) => {
    t.plan(3);

    // A single resource is returned as an object
    let item = new Data;
    item = item.parse({ id: 'ab', type: 'sample', one: 1, two: 2 });
    t.deepEqual(
        item,
        { id: 'ab', type: 'sample', attributes: { one: 1, two: 2 }}
    );

    // A single resource identifier only returns id and type as object
    let identifier = new Data;
    identifier = identifier.parse({ id: 'ab', type: 'sample' });
    t.deepEqual(identifier, { id: 'ab', type: 'sample' });

    // An empty single resource is returned as null
    let empty = new Data;
    empty = empty.parse({});
    t.deepEqual(empty, null);
});
