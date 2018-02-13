class Meta {

    /**
     * Construct an instance of class
    */
    constructor() {
        this.key = 'meta';
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
        this.items = items;
        return this.items;
    }

}

module.exports = Meta;
