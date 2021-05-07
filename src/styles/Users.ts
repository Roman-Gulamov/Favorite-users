import styled from 'styled-components';


export const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 4px solid rgba(128, 128, 128, .3);
    border-radius: 10px;
    margin-bottom: 1em;
`

export const UsersHeadings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
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