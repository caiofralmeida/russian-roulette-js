import {Revolver} from '../src/model/Revolver.js';

describe('A revolver functionality', () => {
   it('should fire a bullet', () => {
       let revolver = new Revolver(6);

       revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(5);
       expect(revolver.cylinderPosition).toEqual(2);
   });

   it('try fire a gun without a bullet', () => {
       let revolver = new Revolver();

       revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(0);
   });

   it('try add exccedded bullets on revolver', () => {
       expect(() => new Revolver(10)).toThrow();
   });
});
