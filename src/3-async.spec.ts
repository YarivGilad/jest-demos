//-----------------------------------
//   async tests - using callbacks
//-----------------------------------
import { fetchIcecream, fetchDance, fetchBrownies } from './3-async';


describe('Using callbacks',()=> {
    test('`fetchIcecream()` defaults to cookies & cream', done => {
        function callback(data: string) {
            try {
                expect(data).toBe('cookies & cream');
                done();
            } catch (error) {
                done(error); 
            }
        }    
        fetchIcecream(callback);
    })
})
//-----------------------------------
//   async tests - using Promises
//-----------------------------------
describe('Using Promises',()=> {
    test('`fetchDance()` defaults to macarena', ()=> {
        //remember to use `return`
        return fetchDance().then(data => {
            expect(data).toBe('macarena');
        });
    })
    test('`fetchBrownies()` fails if no number was specified', ()=> {
        expect.assertions(1);
        return fetchBrownies()
                .catch(err => {
                    expect(err.message).toBe('Number of brownies was not specified...')
                });
    })
})

describe('Using helpers - .resolves / .rejects',()=> { 
    test('fetchBrownies(3) is yielding the goods!', () => {
        return expect(fetchBrownies(3)).resolves.toBe('Have some brownies');
    });
    test('fetchBrownies(n) can get a max of 5 brownies', () => {
        return expect(fetchBrownies(6)).rejects.toThrow('Brownies were maxed out!');
    });
    test('fetchBrownies(`two`) throws on string inputs', () => {
        return expect(fetchBrownies('two')).rejects.toThrow('Number of brownies must be a number...');
    });
})
//-----------------------------------
//   async tests - using  Async/await
//----------------------------------- 
describe('Using Async/await',()=> {
    test('`fetchDance()` defaults to macarena', async ()=> {
        const data = await fetchDance();
        expect(data).toBe('macarena');
    })
    test('`fetchBrownies()` fails if no number was specified', async ()=> {
        expect.assertions(1);
        try {
            await fetchBrownies();
        } catch (err: unknown) {
            expect((err as Error).message).toBe('Number of brownies was not specified...');
        }
    })
})  
describe('Async/await + helpers - .resolves / .rejects',()=> {
    test('fetchBrownies(3) is yielding the goods!', async () => {
        await expect(fetchBrownies(3)).resolves.toBe('Have some brownies');
    });
    test('fetchBrownies(n) can get a max of 5 brownies', async () => {
        await expect(fetchBrownies(6)).rejects.toThrow('Brownies were maxed out!');
    });
    test('fetchBrownies(`two`) throws on string inputs', async () => {
        await expect(fetchBrownies('two')).rejects.toThrow('Number of brownies must be a number...');
    });
})   