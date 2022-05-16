export class Hero {
    constructor(name = '', alterEgo = '') {
        this._name = name;
        this._alterEgo = alterEgo;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length > 0) {
            this._name = value;
        }
    }

    get alterEgo() {
        return this._alterEgo;
    }
}