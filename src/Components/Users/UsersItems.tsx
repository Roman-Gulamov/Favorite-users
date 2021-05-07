import { useContext } from 'react';
import Context from '../../services/context';

import { Card } from './Card';
import { ICardsProps } from '../../interfaces/interface';

import { CardWrapper } from '../../styles/Card';



export const UsersItems = ({ min, max }: ICardsProps): JSX.Element => {
    const listProps = useContext(Context);

    return (
        <>
        {listProps.usersList.map((card) => {
            return card.registered.age >= min && card.registered.age <= max &&
                <CardWrapper 
                    key={card.registered.date} 
                    data-wrapper 
                    draggable={true}
                    onDragStart={() => listProps.usersDragStart(card, listProps.usersList)}
                    onDragEnd={(event) => listProps.usersDragEnd(event)}
                >
                    <Card card={card} />
                </CardWrapper>
        })}
        </>
    )
}
