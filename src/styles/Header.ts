import styled from 'styled-components';


export const HeaderWrapper = styled.header`
    min-height: 10vh;
    height: 100%;
    background-color: #006B53;
    margin-bottom: 1em;
`
export const HeaderInner = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em 0;
`

export const InnerText = styled.span`
    font-size: 2em;
    font-style: italic;
    padding-right: .4em;
    color: #fff;

    @media screen and (max-width: 1024px) {
        font-size: 1.2em;
    }

    @media screen and (max-width: 500px) {
        font-size: .8em;
    }
`

export const InnerIcon = styled.div`
    & svg {
        color: #fff;
    }
`