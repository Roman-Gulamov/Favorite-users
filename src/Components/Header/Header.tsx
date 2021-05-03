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
                    <InnerIcon role="img" aria-label="search">&#128270;</InnerIcon>
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    )
}
