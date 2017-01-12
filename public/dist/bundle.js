//import Revolver from '../model/Revolver';

class RussianRouletteController {
    constructor() {
        this._inputBullets = document.querySelector('#bullets');
        this._spinForce = document.querySelector('#spin_force');
        this._resultDiv = document.querySelector('#result');
    }

    shoot(e) {
        e.preventDefault();

        this._revolver = new Revolver(this._inputBullets.value);
        this._revolver.spinCylinder(this._spinForce.value);
        let result = this._revolver.shoot();
        console.log(result);
    }
}
const CARTRIDGES_LIMIT = 6;

export default class Cylinder {
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
        let limit = this._freeCartridges - bullets;

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
import Cylinder from './Cylinder';

export default class Revolver {
    constructor(bullets = 0) {
        this._cylinder = new Cylinder();
        this._cylinder.addBullets(bullets);
    }

    shoot() {
        if (this._cylinder.bullets === 0) {
            return false;
        }

        try {
            this._cylinder.moveToNext();
            return true;
        } catch (e) {
            return false;
        }
    }

    spinCylinder(force) {
        let position = force;
        while (position > this._cylinder.cartridgesLimit) {
            position = parseInt(position / this._cylinder.cartridgesLimit);
        }
        this._cylinder.spin(position);
    }

    get bulletsOnCylinder() {
        return this._cylinder.bullets;
    }
}
