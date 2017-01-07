const POSITIONS_LIMIT = 6;

export class Cylinder
{
    constructor() {
        this._positions = [];
        this._pointer = 0;
    }

    addBullets(bullets) {
        let limit = (bullets + this.usedPositions);

        if (limit > POSITIONS_LIMIT) {
            throw new Error();
        }

        for (let i = 1; i <= bullets; i++) {
            let value = this._positions[this.usedPositions - 1];
            this._positions.push(value + 1);
        }
    }

    moveToNextPosition() {
        
    }

    get usedPositions() {
        return this._positions.length;
    }

    get isFull() {
        return this.usedPositions === POSITIONS_LIMIT;
    }

}
