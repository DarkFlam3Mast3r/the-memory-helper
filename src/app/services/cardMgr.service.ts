import { Injectable } from "@angular/core";
import {Card,cards} from '../interface/card.interface'
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class cardMgrService{
    
    cardList:Card[] = cards
    currentCardList = new BehaviorSubject<Card[]>(this.cardList)
    constructor() {
        // console.log(this.cardList)
    }
    addCard(name:string,content:string,explanation:string){
        const newcard:Card={
            id:Math.floor(Math.random() * 1000000),
            frontTitle:name,
            frontContent:content,
            backTitle:name,
            backContent:explanation,
            lastTimeChecked:new Date()

        }
        console.log(newcard)
        this.cardList.push(newcard);
        this.currentCardList.next(this.cardList)
    }

    deleteCard(){

    }

    updateCard(){

    }


}