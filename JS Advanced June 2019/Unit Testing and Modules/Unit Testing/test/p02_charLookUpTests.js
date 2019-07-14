const {expect} = require('chai');
const {lookupChar} = require('../functions/p02_CharLookUp');

describe('lookupChar tests',()=>{
    it('should return correct result with valid input', ()=>{
        const expected = 's';
        const actualResult = lookupChar('Kisi', 2);

        expect(actualResult).to.be.equal(expected);
    });

    it('should return undefined with non-string first parameter', ()=>{
        const actualResult = lookupChar(345, 2);

        expect(actualResult).to.be.undefined;
    });


    it('should return undefined with non-string second parameter', ()=>{
        const actualResult = lookupChar('345', '2');

        expect(actualResult).to.be.undefined;
    });

    it('should return \'Incorrect index\' for negative second parameter', ()=>{
        const expected = 'Incorrect index';
        const actualResult = lookupChar('Kisi', -2);

        expect(actualResult).to.be.equal(expected);
    });

    it('should return \'Incorrect index\' for bigger than string length second parameter', ()=>{
        const expected = 'Incorrect index';
        const actualResult = lookupChar('Kisi', 9);

        expect(actualResult).to.be.equal(expected);
    });

    it('should return undefined with floating-point second parameter', ()=>{
        const actualResult = lookupChar('345', 1.2);

        expect(actualResult).to.be.undefined;
    });
});