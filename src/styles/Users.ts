import styled from 'styled-components';
import { Table } from 'react-bootstrap';


export const MyTable = styled(Table)`
    table-layout: fixed;
    margin: 1em 0;

    @media screen and (max-width: 1024px) {
        table-layout: auto;
    }

    & tr th, & tr td {
        @media screen and (max-width: 1024px) {
            font-size: 0.7em;
        }
    }

    & tbody {
        display: block;
        max-height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar { 
            width: 10px;
        }
    
        &::-webkit-scrollbar-track-piece { 
            background-color: gray;
        }
    
        &::-webkit-scrollbar-thumb { 
            background-color: #006B53;
            border-radius: 15px;
            height: 100px;
        }
    }
`

export const UsersSearch = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
    transition: background-color 0s 50000s;

    &::placeholder {
        font-weight: 300;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 0.8em;
    }
`

export const Card = styled.div`
    display: flex;
    padding: .4em;
    margin-bottom: .5em;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const CardImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1em;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 0;
    }
    
    & img {
        border-radius: 50%;
        height: 80%;
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

    @media screen and (max-width: 500px) {
        font-size: .7em;
    }
`