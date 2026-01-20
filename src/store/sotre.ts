type UserId = string

interface Chat{
    userId:UserId;
    name:string;
    messgae:string;
    upvotes:UserId[];// as we'll have to store who has upvoted what 
}


export abstract class store{
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