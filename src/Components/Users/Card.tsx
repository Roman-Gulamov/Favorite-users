import moment from 'moment';
import { ICardData } from '../../interfaces/interface';

import {
    CardImg,
    CardInfo,
    InfoInline,
    InlineName,
    InlineRegistered,
    InfoBlock,
    BlockMail } from '../../styles/Card';


export const Card = ({ card }: ICardData) => {
    return (
        <>
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
        </>
    )
}
