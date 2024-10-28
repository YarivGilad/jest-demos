const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchIcecream = (cb: (s:string)=> void)=> {
    setTimeout(() => {
        cb('cookies & cream')
    }, 300);
}

export const fetchDance = ()=> delay(300).then(()=> 'macarena');

export const fetchBrownies = (n?: any) => {
    return delay(300).then(()=> {
        if(!n){
            throw new Error('Number of brownies was not specified...');
        }
        if(typeof n !== 'number')
            throw new Error('Number of brownies must be a number...');
        if(n > 5) 
            throw new Error('Brownies were maxed out!');

        return 'Have some brownies'
    })
};

export async function fetchBrownies2(n: number) {
    await delay(300);
    if(!n){
        throw new Error('Number of brownies was not specified...');
    }
    if(typeof n !== 'number')
        throw new Error('Number of brownies must be a number...');
    if(n > 5) 
        throw new Error('Brownies were maxed out!');

    return 'Have some brownies'
};
