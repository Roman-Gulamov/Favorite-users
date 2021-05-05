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
    BlockMail } from '../../styles/Users';


export const CardsItems = ({ min, max }: ICardsProps): JSX.Element => {
    const listProps = useContext(Context);

    return (
        <>
        {listProps.usersList.map(({ registered: { age, date }, email, name: { first, last }, picture: { medium } }) =>
            age >= min && age <= max ?
                <CardWrapper key={date} className="cardWrapper" data-wrapper>
                    <CardImg>
                        <img src={medium} alt={`${first} ${last}`} />
                    </CardImg>
                    <CardInfo>
                        <InfoInline>
                            <InlineName data-text>{`${first} ${last}`}</InlineName>
                            <InlineRegistered>
                                <span>Дата регистрации: </span> 
                                <span>{moment(date).format('L')}</span>
                            </InlineRegistered>
                        </InfoInline>
                        <InfoBlock>
                            <BlockMail>{email}</BlockMail>
                        </InfoBlock>
                    </CardInfo>
                </CardWrapper> : false
        )}
        </>
    )
}
