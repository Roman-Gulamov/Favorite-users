import { useContext } from 'react';
import moment from 'moment';
import Context from '../../services/context';

import { ICardsProps } from '../../interfaces/interface';

import {
    CardWrapper,
    CardImg,
    CardInfo,
    InfoInline,
    InlineName,
    InlineRegistered,
    InfoBlock,
    BlockMail } from '../../styles/CardsItems';


export const CardsItems = ({ min, max }: ICardsProps): JSX.Element => {
    const listProps = useContext(Context);

    return (
        <>
        {listProps.usersList.map((card) =>
            card.registered.age >= min && card.registered.age <= max ?
                <CardWrapper 
                    key={card.registered.date} 
                    data-wrapper 
                    draggable={true}
                    onDragStart={(event: any) => listProps.dragStartHandler(event, card)}
                    onDragLeave={(event: any) => listProps.dragLeaveHandler(event)}
                    onDragEnd={(event: any) => listProps.dragEndHandler(event)}
                    onDragOver={(event: any) => listProps.dragOverHandler(event)}
                    onDrop={(event: any) => listProps.dropHandler(event, card)}
                >
                    <CardImg>
                        <img src={card.picture.medium} alt={`${card.name.first} ${card.name.last}`} />
                    </CardImg>
                    <CardInfo>
                        <InfoInline>
                            <InlineName data-text>{`${card.name.first} ${card.name.last}`}</InlineName>
                            <InlineRegistered>
                                <span>Дата регистрации: </span> 
                                <span>{moment(card.registered.date).format('L')}</span>
                            </InlineRegistered>
                        </InfoInline>
                        <InfoBlock>
                            <BlockMail>{card.email}</BlockMail>
                        </InfoBlock>
                    </CardInfo>
                </CardWrapper> : false
        )}
        </>
    )
}
