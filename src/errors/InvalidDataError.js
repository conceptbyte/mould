class InvalidDataError extends Error {

    constructor(message) {
        super();
        this.name = 'InvalidDataError';
        this.message = message;
    }

}

module.exports = InvalidDataError;
