const InvalidDataError = require('./errors/InvalidDataError');
const Keys = require('./config/keys');

class Error {

    /**
     * Construct an instance of class
    */
    constructor() {
        this.key = Keys.errors;
        this.items = [];
    }

    /**
     * Returns the string representation of class
    */
    toString() {
        return this.key;
    }
    
    /**
     * Parse the meta data passed in
     *
     * @param {Array} items
     */
    parse(items) {
        if (!Array.isArray(items)) {
            throw new InvalidDataError('Invalid data type for model(s)');
        }

        this.items = items;
        return this.items;
    }
}

module.exports = Error;
