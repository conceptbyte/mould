class Response {

    push(key, value) {
        this[String(key)] = key.parse(value);
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Response;
