import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';

import { 
    HeaderWrapper, 
    HeaderInner, 
    InnerText, 
    InnerIcon } from '../../styles/Header';


export const Header = (): JSX.Element => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderInner>
                    <InnerText>Найди своего пользователя!</InnerText>
                    <InnerIcon>
                        <FontAwesomeIcon icon={faSearchLocation} size='lg' />
                    </InnerIcon>
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    )
}
