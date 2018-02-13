import { test } from 'ava';
import Meta from '../src/Meta';

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
