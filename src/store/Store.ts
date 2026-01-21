type UserId = string

export interface Chat{
    userId:UserId;
    name:string;
    messgae:string;
    upvotes:UserId[];// as we'll have to store who has upvoted what 
}


export abstract class Store{
    constructor(){

    }
    initRoom(){

    }

    getchats(room:string,limit:number,offset:number){

    }

    addchat(room:string,limit:number,offsrt:number){

    }

    upvote(room:string, chatid:string){}
}
