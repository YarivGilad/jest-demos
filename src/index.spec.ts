function sum(a:number,b: number):number {
    return a + b
};

describe('some module',()=>{
    test('the sum function',()=> {
        const actual = sum(2,3);
        const expected = 5;
        expect(actual).toBe(expected);
    })
    it('some other function should do this and that',()=> {
        
    })
    describe('some other module3',()=>{
        it('do this and that',()=> {
        
        })
    })

})
describe('some othermodule',()=>{
    test('the sum2 function',()=> {
        const actual = sum(2,3);
        const expected = 5;
        expect(actual).toBe(expected);
    })
    it(' aother function should do this and that',()=> {
        
    })

})