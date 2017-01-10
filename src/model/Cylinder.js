const CARTRIDGES_LIMIT = 6;

class Cylinder
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
        this.cartridgesLimit = 6;
        this._freeCartridges = this.cartridgesLimit;
    }

    addBullets(bullets) {
        let limit = (this._freeCartridges - bullets);

        if (limit < 0) {
            throw new Error();
        }

        for (let i = 1; i <= bullets; i++) {
            for (let k = 1; k <= this.cartridgesLimit; k++) {
                if (!this._cartridges[k]) {
                    this._cartridges[k] = true;
                    this._freeCartridges--;
                    break;
                }
            }
        }
    }

    moveToNext() {
        let actualPointer = this._pointer;

        this.spin(1);

        if (!this._cartridges[actualPointer]) {
            throw new Error('bullet not found.');
        }

        this._cartridges[actualPointer] = null;
        this._freeCartridges++;
    }

    spin(position) {
        for (let i = 1; i <= position; i++) {
            if (this._pointer == this.cartridgesLimit) {
                this._pointer = 1;
            }
            this._pointer++;
        }
    }

    get show() {
        return this._cartridges;
    }

    get freeCartridges() {
        return this._freeCartridges;
    }

    get bullets() {
        return this.cartridgesLimit - this._freeCartridges;
    }

    get isLoaded() {
        return this._freeCartridges === 0;
    }
}
