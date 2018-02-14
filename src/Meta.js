const InvalidDataError = require('./errors/InvalidDataError');
const Keys = require('./config/keys');

class Meta {

    /**
     * Construct an instance of class
    */
    constructor() {
        this.key = Keys.meta;
        this.items = {};
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
     * @param {Object} items
     */
    parse(items) {
        if (typeof items !== 'object') {
            throw new InvalidDataError('Invalid data type for model(s)');
        }

        this.items = items;
        return this.items;
    }

}

module.exports = Meta;
