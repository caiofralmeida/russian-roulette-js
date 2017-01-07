import {Cylinder} from '../src/model/Cylinder.js';

describe('A cylinder of revolver functionality', () => {
   it('a new cylinder', () => {
       let cylinder = new Cylinder();
       expect(cylinder.usedPositions).toEqual(0);
   });

   it('add bullet on full cylinder', () => {
       let cylinder = new Cylinder();
       cylinder.addBullets(5);

       expect(() => cylinder.addBullets(7)).toThrow(new Error());
   });

   it('add bullets on cylinder', () => {
       let cylinder = new Cylinder();
       cylinder.addBullets(3);
       cylinder.addBullets(3);

       expect(cylinder.isFull).toBeTruthy();
   });

   it('complete bullets on cylinder', () => {
       let cylinder = new Cylinder();
       cylinder.addBullets(6);

       expect(cylinder.isFull).toBeTruthy();
   });
});
