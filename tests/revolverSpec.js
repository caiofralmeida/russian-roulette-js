import {Revolver} from '../src/model/Revolver.js';
import {Cylinder} from '../src/model/Cylinder.js';

describe('A revolver functionality', () => {
   it('should fire a bullet', () => {
       let revolver = new Revolver(6, new Cylinder());
       revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(5);
   });

   it('try fire a gun without a bullet', () => {
       let revolver = new Revolver(0, new Cylinder());

       revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(0);
   });

   it('try add exccedded bullets on revolver', () => {
       expect(() => new Revolver(10, new Cylinder())).toThrow();
   });
});
