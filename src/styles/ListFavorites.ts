import styled, { css } from 'styled-components';
import { IDragToFavorite, IHeartVisibility } from '../interfaces/interface';


export const FavoritesWrapper = styled.div<IDragToFavorite>`
    position: relative;
    width: 50%;
    max-height: 1090px;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all .1s ease;
    border-left: 1px solid rgba(128, 128, 128, .3);

    &::-webkit-scrollbar { 
        width: 0;
    }

    ${props => props.dragToFavorite && css`
        border-radius: 10px;
        border: 3px dashed #006B53;
    `}
`

export const FavoritesHearts = styled.div<IHeartVisibility>`
    display: none;
    position: absolute;
    left: 43%;
    top: 23%;
    opacity: 60%;
    transition: all .1s ease;

    @media screen and (max-width: 1200px) {
        left: 41%;
    }

    @media screen and (max-width: 768px) {
        left: 35%;
    }
    
    & svg {
        color: palevioletred;
    }

    ${props => props.heartVisibility && css`
        display: block;
    `}
`

export const CardDelete = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    margin-right: 1em;

    @media screen and (max-width: 1024px) {
        margin-right: 0;
        margin-top: .4em;
    }

    & svg {
        transition: all .4s ease;

        &:hover {
            color: #006B53;
            transform: scale(1.2);
        }

        &:active {
            transform: scale(1);
        }
    }
`