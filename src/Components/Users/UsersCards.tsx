import { useContext } from 'react';
import moment from 'moment';
import Context from '../../services/context';

import {
    Card,
    CardImg,
    CardInfo,
    InfoInline,
    InlineName,
    InlineRegistered,
    InfoBlock,
    BlockMail } from '../../styles/Users';


export const UsersCards = (): JSX.Element => {
    const listProps = useContext(Context);

    return (
        <>
        {listProps.usersList.map(({ registered: { age, date }, email, name: { first, last }, picture: { medium } }) =>
        <tr key={date}>
            <td>
                <Card>
                    <CardImg>
                        <img src={medium} alt={`${first} ${last}`} />
                    </CardImg>
                    <CardInfo>
                        <InfoInline>
                            <InlineName>{`${first} ${last}.`}</InlineName>
                            <InlineRegistered>
                                <span>Дата регистрации: </span> 
                                <span>{moment(date).format('L')} </span>
                            </InlineRegistered>
                        </InfoInline>
                        <InfoBlock>
                            <BlockMail>{email}</BlockMail>
                        </InfoBlock>
                    </CardInfo>
                </Card>
            </td>
        </tr>
        )}
        </>
    )
}
