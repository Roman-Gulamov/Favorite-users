import { FormEvent, RefObject } from 'react';


const searchName = (event: FormEvent<HTMLInputElement>, searchRef: RefObject<HTMLDivElement>): void => {
    const node: HTMLDivElement = searchRef.current;
    const inputValue: string = event.currentTarget.value;
    const iterableUsers: NodeListOf<HTMLDivElement> = node.querySelectorAll('[data-text]');
    
    if (inputValue.trim()) {
        iterableUsers.forEach((child: any): string => {
            return (
                child.innerText.toLowerCase().trim().indexOf(inputValue.toLowerCase().trim()) === -1 ? 
                    child.closest("[data-wrapper]").style.display = "none" : 
                    child.closest("[data-wrapper]").style.display = "flex"
            );
        });
    } else {
        iterableUsers.forEach((child: any): string => child.closest("[data-wrapper]").style.display = "flex");
    }
}

export default searchName;