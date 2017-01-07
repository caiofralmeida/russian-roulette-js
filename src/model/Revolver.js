const CYLINDER_LIMIT = 6;

export class Revolver {
    constructor(bullets = 0) {
        if (bullets > CYLINDER_LIMIT) {
            throw new Error(`Bullets on revolver limit is ${CYLINDER_LIMIT}.`);
        }
        this._bullets = bullets;
        this._cylinderPosition = 1;
    }

    shoot() {
        if (this._bullets === 0) {
            return;
        }

        this._moveCylinder();
        --this._bullets;
    }

    _moveCylinder() {
        ++this._cylinderPosition;
    }

    get bulletsOnCylinder() {
        return this._bullets;
    }

    get cylinderPosition() {
        return this._cylinderPosition;
    }
}
