import {generateUuid, validateUuid} from "./uuid.js";
import {ValidationError} from "./errors.js";

export class SupplierId {
    #value;

    constructor(value) {
        if (!validateUuid(value))
            throw new ValidationError(`Invalid Product Id: ${value}. Must be a valid UUI.`)
        this.#value = value;
    }

    static generate() {
        return new SupplierId(generateUuid());
    }

    get value() {
        return this.#value
    };

    equals(other) {
        return other instanceof SupplierId && this.#value === other.value;
    }

}