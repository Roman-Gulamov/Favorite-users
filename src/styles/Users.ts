import styled, { css } from 'styled-components';
import Card from 'react-bootstrap/Card';
import { IDisabled } from '../interfaces/interface';


export const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 4px solid rgba(128, 128, 128, .3);
    border-radius: 10px;
`

export const UsersHeadings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 8vh;
    padding: 0 .6em;
`

export const HeadingSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    & input {
        border: none;
        background-color: transparent;
        transition: background-color 0s 50000s;

        @media screen and (max-width: 1024px) {
            width: 100%;
            font-size: 0.8em;
        }   

        &::placeholder {
            font-weight: 300;
        }
    }
`

export const HeadingFavorite = styled.span`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;

    @media screen and (max-width: 1024px) {
        font-size: 0.8em;
    }
`

export const UsersList = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 4px solid rgba(128, 128, 128, .3);
    border-radius: 10px;
`

export const ListFavorites = styled.div`

`

export const ListWrapper = styled.div`
    width: 60%;
`

export const MyCard = styled(Card)<IDisabled>`
    cursor: pointer;

    & .card-header {
        @media screen and (max-width: 1024px) {
            font-size: .7em;
            text-align: center;
        }  
    }

    ${props => props.disabled && css`
        pointer-events: none;
        opacity: 60%;
    `}
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

export const CardWrapper = styled.div`
    display: flex;
    padding: .4em;
    border-bottom: 1px solid rgba(128, 128, 128, .3);
    transition: all .4s ease;
    cursor: grab;
    user-select: none;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    &:hover {
        background-color: rgba(128, 128, 128, .3);
    }

    &:active {
        cursor: grabbing;
    }

    &:last-child {
        border-bottom: none;
    }
`

export const CardImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1em;

    @media screen and (max-width: 1024px) {
        margin: 0;
    }
    
    & img {
        border-radius: 50%;
    }
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
` 

export const InfoInline = styled.div`
    display: flex;
    flex-flow: row wrap;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
`

export const InlineName = styled.p`
    font-style: italic;
    margin-right: .5em;

    @media screen and (max-width: 1024px) {
        margin-right: 0;
    }    
    
    @media screen and (max-width: 500px) {
        font-size: .7em;
    }
`

export const InlineRegistered = styled.p`
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: .7em;
    }

    & span:first-child {
        font-size: 1em;
        font-weight: 900;

        @media screen and (max-width: 500px) {
            font-size: .7em;
        }
    }

    & span:last-child {
        font-size: .9em;
    }
`

export const InfoBlock = styled.div`
    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
    }
`

export const BlockMail = styled.p`
    font-size: .9em;

    @media screen and (max-width: 1024px) {
        font-size: .7em;
    }

    @media screen and (max-width: 500px) {
        font-size: .5em;
    }
`