import { test } from 'ava';
import Meta from '../src/Meta';

test('It creates a meta object', (t) => {
    let meta = new Meta;
    t.truthy(String(meta) == 'meta');
});
