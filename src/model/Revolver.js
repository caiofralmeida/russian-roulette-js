//import Cylinder from './Cylinder';

class Revolver {
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
