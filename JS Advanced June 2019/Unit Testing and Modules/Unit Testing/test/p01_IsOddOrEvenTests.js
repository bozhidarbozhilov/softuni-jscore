const {expect} = require('chai');
const {isOddOrEven} = require('../functions/p01_IsOddOrEven');

describe('Even or odd number is string length', ()=>{
    it('should return even for isOddOrEven(\'even\')',()=>{
        const expected = 'even';
        const actualResult = isOddOrEven('even');

        expect(actualResult).to.be.equal(expected);
    });

    it('should return odd for isOddOrEven(\'odd\')',()=>{
        const expected = 'odd';
        const actualResult = isOddOrEven('odd');

        expect(actualResult).to.be.equal(expected);
    });

    it('should return undefined for isOddOrEven(675)',()=>{
        const actualResult = isOddOrEven(675);

        expect(actualResult).to.be.undefined;
    });
})