import { test } from 'ava';
import Response from '../src/Response';

const Mock = {};
Mock.parse = (items) => { return items; };
Mock.toString = () => { return 'Mock'; };

test('It creates a response object', (t) => {
    let response = new Response();
    t.truthy(String(response) == '{}');
});

test('It allows to push data into the response', (t) => {
    let response = new Response();
    response.push(Mock, { test: 123 });
    t.truthy(String(response) == '{"Mock":{"test":123}}');
});
