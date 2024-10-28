
export const forEach = (items: any[], cb:(item:any,i?:number,arr?:any[])=>void)=> {
    for(var item of items){
        cb(item);
    }
}

export const filter = (items: any[], cb:(item:any,i?:number,arr?:any[])=>boolean)=> {
    var out = [];
    for(var item of items){
        if(cb(item)){
            out.push(item)
        }
    }
    return out;
}