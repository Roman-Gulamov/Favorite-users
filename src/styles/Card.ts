import styled from 'styled-components';


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

    &.hide {
        display: none;
    }

    &.gray {
        background-color: rgba(128, 128, 128, .3);
    }
`

export const CardImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: .5em;

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

    @media screen and (max-width: 1200px) {
        justify-content: center;
    }
`

export const InlineName = styled.p`
    font-style: italic;
    margin-right: .5em;

    @media screen and (max-width: 1024px) {
        font-size: .7em;
        margin-right: 0;
    }    
`

export const InlineRegistered = styled.p`
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: .7em;
    }

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
    @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: center;
    }
`

export const BlockMail = styled.p`
    font-size: .9em;

    @media screen and (max-width: 1024px) {
        font-size: .5em;
    }

    @media screen and (max-width: 500px) {
        font-size: .5em;
    }
`