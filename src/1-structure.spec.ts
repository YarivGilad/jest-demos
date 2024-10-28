import { describe, test, it} from '@jest/globals';

// 1) run simple unit tests
test('the abc function',()=> {
//    return false;
})
test('the xyz function',()=> {
    
})  

// 2) basic structure

describe('Skeleton structure of a test', ()=> {

    it('should behave like this',()=> {
        
    })

    it('should behave like that',()=> {

    })

    test('the xyz function',()=> {

    })
}) 


// 3) nested structure
 
describe('some main module',()=> {

    describe('some method',()=> {

        it('should behave like this',()=> {
            
        })
        it('should behave like that',()=> {

        })
    })
    
    describe('some other method',()=> {
        test('returns a certain valu if called with these arguments',()=> {
            
        })
        test('throws an error in these circumstances',()=> {
    
        })
    })
}) 
