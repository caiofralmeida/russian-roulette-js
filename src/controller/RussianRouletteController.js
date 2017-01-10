//import Revolver from '../model/Revolver';

class RussianRouletteController {
    constructor() {
        this._inputBullets = document.querySelector('#bullets');
        this._spinForce    = document.querySelector('#spin_force');
        this._resultDiv    = document.querySelector('#result');
    }

    shoot(e) {
        e.preventDefault();

        this._revolver = new Revolver(this._inputBullets.value);
        this._revolver.spinCylinder(this._spinForce.value);
        let result = this._revolver.shoot();
        console.log(result);
    }
}
