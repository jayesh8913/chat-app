import { Store } from "./store/Store.js"
export abstract class inMemoryStore implements Store{
    constructor(){
        console.log()
    }
    initRoom(){

    }

    getchats(room:string,limit:number,offset:number){

    }

    addchat(room:string,limit:number,offsrt:number){

    }

    upvote(room:string, chatid:string){}
}
export{}