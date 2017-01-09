import Cylinder from './Cylinder';

export default class Revolver {
    constructor(bullets = 0) {
        this._cylinder = new Cylinder();
        this._cylinder.addBullets(bullets);
    }

    shoot() {
        if (this._cylinder.bullets === 0) {
            return;
        }

        this._cylinder.moveToNext();
    }

    get bulletsOnCylinder() {
        return this._cylinder.bullets;
    }

    get cylinderPosition() {
        return this._cylinderPosition;
    }
}
