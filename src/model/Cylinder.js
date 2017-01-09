const CARTRIDGES_LIMIT = 6;

export default class Cylinder
{
    constructor() {
        this._cartridges = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null
        };
        this._pointer = 1;
        this._freeCartridges = CARTRIDGES_LIMIT;
    }

    addBullets(bullets) {
        let limit = (this._freeCartridges - bullets);

        if (limit < 0) {
            throw new Error();
        }

        for (let i = 1; i <= bullets; i++) {
            for (let k = 1; k <= CARTRIDGES_LIMIT; k++) {
                if (!this._cartridges[k]) {
                    this._cartridges[k] = true;
                    this._freeCartridges--;
                    break;
                }
            }
        }
    }

    moveToNext() {
        this._cartridges[this._pointer] = null;
        this._freeCartridges++;
        this._pointer++;
    }

    get show() {
        return this._cartridges;
    }

    get freeCartridges() {
        return this._freeCartridges;
    }

    get bullets() {
        return CARTRIDGES_LIMIT - this._freeCartridges;
    }

    get isLoaded() {
        return this._freeCartridges === 0;
    }
}
