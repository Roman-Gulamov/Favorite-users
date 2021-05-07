import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Context from '../../services/context';

import { CARDS_DATA } from '../../data/cardsData';
import { UsersItems } from './UsersItems';

import { UsersWrapper, MyCard, MyCardBody } from '../../styles/ListUsers';


export const ListUsers = (): JSX.Element => {
    const listProps = useContext(Context);
    
    return (
        <UsersWrapper ref={listProps.searchRef}>
            <Accordion defaultActiveKey="1">
            {CARDS_DATA.map(({ eventKey, title, min, max }) =>
                <MyCard key={eventKey}>
                    <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                        {title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={eventKey}>
                        <MyCardBody>
                            <UsersItems min={min} max={max} />
                        </MyCardBody>
                    </Accordion.Collapse>
                </MyCard>
            )}
            </Accordion>
        </UsersWrapper>
    )
}
