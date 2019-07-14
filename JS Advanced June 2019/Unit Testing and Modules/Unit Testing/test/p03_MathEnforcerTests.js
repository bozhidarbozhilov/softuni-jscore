const {expect} = require('chai');
const mathEnforcer = require('../functions/p03_MathEnforcer').mathEnforcer;

describe('MathEnforcer tests', ()=>{

    describe('addFive Tests', ()=>{
        it('should add 5 to correct input parameter',()=>{
            const expected = 8;
            const actual = mathEnforcer.addFive(3);
    
            expect(actual).to.be.equal(expected);
        });

        it('should add 5 to correct floating-point input parameter',()=>{
            const expected = 8.6;
            const actual = mathEnforcer.addFive(3.6);
    
            expect(actual).to.be.closeTo(expected, 0.2);
        });
    
        it('should add 5 to correct negative input parameter',()=>{
            const expected = 2;
            const actual = mathEnforcer.addFive(-3);
    
            expect(actual).to.be.equal(expected);
        });
    
    
        it('should return undefined for non-number parameter',()=>{
            const actual = mathEnforcer.addFive('3');
    
            expect(actual).to.be.undefined;
        });
    });

    describe('subtractTen tests',()=>{
        it('should subtract 10 to correct input parameter',()=>{
            const expected = 5;
            const actual = mathEnforcer.subtractTen(15);
    
            expect(actual).to.be.equal(expected);
        });

        it('should subtract 10 to correct floating-point input parameter',()=>{
            const expected = 5.3;
            const actual = mathEnforcer.subtractTen(15.3);
    
            expect(actual).to.be.closeTo(expected, 0.1);
        });

        it('should subtract 10 to correct negative input parameter',()=>{
            const expected = -15;
            const actual = mathEnforcer.subtractTen(-5);
    
            expect(actual).to.be.equal(expected);
        });
    
        it('should return undefined for non-number parameter',()=>{
            const actual = mathEnforcer.subtractTen('3');
    
            expect(actual).to.be.undefined;
        });
    });

    describe('sum tests',()=>{
        it('should sum two correct input parameters',()=>{
            const expected = 10;
            const actual = mathEnforcer.sum(8,2);
    
            expect(actual).to.be.equal(expected);
        });

        it('should sum two correct negative input parameters',()=>{
            const expected = -10;
            const actual = mathEnforcer.sum(-8,-2);
    
            expect(actual).to.be.equal(expected);
        });

        it('should sum two correct second negative input parameter',()=>{
            const expected = 6;
            const actual = mathEnforcer.sum(8,-2);
    
            expect(actual).to.be.equal(expected);
        });

        it('should sum two correct input floating-point parameters',()=>{
            const expected = 10.5;
            const actual = mathEnforcer.sum(8.2,2.2);
    
            expect(actual).to.be.closeTo(expected, 0.5);
        });

        it('should sum two correct first floating-point input parameters',()=>{
            const expected = 10.2;
            const actual = mathEnforcer.sum(8.2,2);
    
            expect(actual).to.be.closeTo(expected, 0.1);
        });

        it('should sum two correct second floating-point input parameters',()=>{
            const expected = 10.2;
            const actual = mathEnforcer.sum(8,2.2);
    
            expect(actual).to.be.closeTo(expected, 0.1);
        });
    
        it('should return undefined for first non-number parameter',()=>{
            const actual = mathEnforcer.sum('3', 9);
    
            expect(actual).to.be.undefined;
        });

        it('should return undefined for second non-number parameter',()=>{
            const actual = mathEnforcer.sum(7, '9');
    
            expect(actual).to.be.undefined;
        });
    });
})