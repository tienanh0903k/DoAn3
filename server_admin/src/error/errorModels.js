class HttpError extends Error {
    constructor(mes, code) {
        super(mes);
        this.code = code;
    }
}

module.exports = HttpError;