import { FormEvent, RefObject } from 'react';

import findDisabled from './findDisabled';


const searchName = (event: FormEvent<HTMLInputElement>, searchRef: RefObject<HTMLDivElement>): void => {
    const inputValue: string = event.currentTarget.value.toLowerCase().trim();
    const node: HTMLDivElement = searchRef.current;
    const iterableNames: NodeListOf<HTMLDivElement> = node.querySelectorAll('[data-text]');

    if (inputValue) {
        iterableNames.forEach((child: HTMLDivElement): void => {
            let search: number = child.innerText.search(RegExp(inputValue,"gi"));

            if (search === -1) {
                child.closest("[data-wrapper]").classList.add('hide');
            } else {
                child.closest("[data-wrapper]").classList.remove('hide');
                child.innerHTML = insertMark(child.innerText, search, inputValue.length);
            }
        });
    } else {
        iterableNames.forEach((child: HTMLDivElement) => {
            child.closest("[data-wrapper]").classList.remove('hide');
            child.innerHTML = child.innerText;
        });
    }

    findDisabled(searchRef);
}

const insertMark = (value: string, position: number, amountChar: number): string => {
    return value.slice(0, position) + 
            '<mark>' + value.slice(position, position + amountChar) + '</mark>' 
            + value.slice(position + amountChar)
}

export default searchName;