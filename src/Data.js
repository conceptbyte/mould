class Data {

    /**
     * Construct a data object
     */
    constructor() {
        this.key = 'data';
    }

    /**
     * Returns the string cast of the class
     */
    toString() {
        return this.key;
    }

    /**
     * Parses a collection of models
     *
     * @param {Array} items
     */
    parse(items) {

        if ( Array.isArray(items) ) {
            return this.parseArray(items);
        }

        if ( typeof items === 'object' ) {
            return this.parseObject(items);
        }

        throw new Error('Invalid data type for model(s)');

    }

    /**
     * Parse an array of data items
     *
     * @param {Array} items
     */
    parseArray(items) {

        return items.map((item) => {
            let { id, type, ...attributes } = item;
            return {
                id: id || '',
                type: type || '',
                attributes: attributes
            };
        });

    }

    /**
     * Parse a data object
     *
     * @param {Object} item
     */
    parseObject(item) {

        if ( Object.keys(item).length === 0 ) {
            return null;
        }

        let { id, type, ...attributes } = item;
        let resource = {
            id: id || '',
            type: type || '',
        };

        if ( Object.keys(attributes).length > 0 ) {
            resource.attributes = attributes;
        }

        return resource;

    }

}

module.exports = Data;
