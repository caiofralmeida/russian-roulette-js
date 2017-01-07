export class Revolver {
    constructor(bullets = 0, cylinder) {
        this._cylinder = cylinder;
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
