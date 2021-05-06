import { RefObject } from "react";


const findDisabled = (searchRef: RefObject<HTMLDivElement>) => {
    const accordion: HTMLDivElement = searchRef.current;
    const iterableCards: NodeListOf<HTMLDivElement> = accordion.querySelectorAll('.card-body');

    iterableCards.forEach((card: HTMLDivElement): void => {
        const hideCards = card.querySelectorAll('.hide').length;
        
        !card.childNodes.length ?
            card.closest('.card').classList.add('disabled') 
            :
        card.children.length > 0 && hideCards >= card.childNodes.length ? 
            card.closest('.card').classList.add('disabled') 
            :
            card.closest('.card').classList.remove('disabled');
    });
}

export default findDisabled;