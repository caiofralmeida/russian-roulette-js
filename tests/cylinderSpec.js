import {Cylinder} from '../src/model/Cylinder.js';

describe('A cylinder of revolver functionality', () => {
   it('a new cylinder', () => {
       let cylinder = new Cylinder();
       expect(cylinder._freeCartridges).toEqual(6);
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

       expect(cylinder.isLoaded).toBeTruthy();
   });

   it('complete bullets on cylinder', () => {
       let cylinder = new Cylinder();
       cylinder.addBullets(6);

       expect(cylinder.isLoaded).toBeTruthy();
   });

   it('show cylinder', () => {
       let cylinder = new Cylinder();
       cylinder.addBullets(3);

       let expected = {
           1: true,
           2: true,
           3: true,
           4: null,
           5: null,
           6: null
       };

       expect(cylinder.show).toEqual(expected);
       expect(cylinder.freeCartridges).toEqual(3);
   });

   it('show full cylinder', () => {
       let cylinder = new Cylinder();
       cylinder.addBullets(3);
       cylinder.addBullets(1);
       cylinder.addBullets(2);


       let expected = {
           1: true,
           2: true,
           3: true,
           4: true,
           5: true,
           6: true
       };

       expect(cylinder.show).toEqual(expected);
       expect(cylinder.freeCartridges).toEqual(0);
   });
});
