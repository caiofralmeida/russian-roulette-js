import Revolver from '../src/model/Revolver.js';
import Cylinder from '../src/model/Cylinder.js';

describe('A revolver functionality', () => {
   it('should fire a bullet', () => {
       let revolver = new Revolver(6);
       revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(5);
   });

   it('try fire a gun without a bullet', () => {
       let revolver = new Revolver(0);

       revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(0);
   });

   it('try add exccedded bullets on revolver', () => {
       expect(() => new Revolver(10)).toThrow();
   });

   it('reload revolver and spin cylinder', () => {
       let revolver = new Revolver(6);

       revolver.spinCylinder(10);
       revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(5);
   });

   it('add one bullet on revolver and spin cylinder then fire a falsy shoot', () => {
       let revolver = new Revolver(1);

       revolver.spinCylinder(20);

       let result = revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(1);
       expect(result).toBeFalsy();
   });

   it('add one bullet on revolver and spin cylinder then fire a truthy shoot', () => {
       let revolver = new Revolver(1);

       revolver.spinCylinder(0);

       let result = revolver.shoot();

       expect(revolver.bulletsOnCylinder).toEqual(0);
       expect(result).toBeTruthy();
   });
});
