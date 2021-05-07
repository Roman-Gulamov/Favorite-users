import styled from 'styled-components';
import Card from 'react-bootstrap/Card';


export const UsersWrapper = styled.div`
    width: 50%;
`

export const MyCard = styled(Card)`
    cursor: pointer;

    &.disabled {
        pointer-events: none;
        opacity: 60%;
    }

    & .card-header {
        @media screen and (max-width: 1024px) {
            font-size: .7em;
            text-align: center;
        }  
    }
`

export const MyCardBody = styled(Card.Body)`
    padding: 0;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar { 
        width: 0;
    }
`