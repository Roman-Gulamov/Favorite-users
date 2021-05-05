import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Context from '../../services/context';

import { CARDS_DATA } from '../../data/cardsData';
import { CardsItems } from './CardsItems';

import { ListWrapper, MyCard, MyCardBody } from '../../styles/Users';


export const ListCards = (): JSX.Element => {
    const listProps = useContext(Context);
    
    return (
        <ListWrapper ref={listProps.searchRef}>
            <Accordion defaultActiveKey="1">
            {CARDS_DATA.map(({ eventKey, title, min, max, disabled }) =>
                <MyCard key={eventKey} disabled={disabled}>
                    <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                        {title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={eventKey}>
                        <MyCardBody>
                            <CardsItems min={min} max={max} />
                        </MyCardBody>
                    </Accordion.Collapse>
                </MyCard>
            )}
            </Accordion>
        </ListWrapper>
    )
}
