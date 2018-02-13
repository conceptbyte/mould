class Meta {

    constructor() {
        this.key = 'meta';
    }

    toString() {
        return this.key;
    }

    parse(items) {
        return items;
    }

}

module.exports = Meta;
