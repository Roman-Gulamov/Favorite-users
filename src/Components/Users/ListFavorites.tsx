import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import Context from '../../services/context';

import { Card } from './Card';

import { CardWrapper } from '../../styles/Card';
import { 
    FavoritesWrapper, 
    FavoritesHearts, 
    CardDelete } from '../../styles/ListFavorites';


export const ListFavorites = (): JSX.Element => {
    const listProps = useContext(Context);

    return (
        <FavoritesWrapper
            dragToFavorite={listProps.dragToFavorite}
            onDragOver={(event) => listProps.favoriteDragOver(event)}
            onDragLeave={(event) => listProps.favoriteDragLeave(event)}
            onDrop={(event) => listProps.favoriteWrapperDrop(event)}
        >
            <FavoritesHearts heartVisibility={listProps.heartVisibility}>
                <FontAwesomeIcon icon={faHeart} size='3x' />
            </FavoritesHearts>
            {listProps.favoriteList.map((card) =>
                <CardWrapper
                    key={card.registered.date}
                    draggable={true}
                    onDragStart={() => listProps.favoriteDragStart(card)}
                    onDragLeave={(event) => listProps.favoriteDragLeave(event)}
                    onDragOver={(event) => listProps.favoriteDragOver(event)}
                    onDrop={(event) => listProps.favoriteDrop(event, card)}
                >
                    <Card card={card} />
                    <CardDelete onClick={() => listProps.removeFavorite(card)}>
                        <FontAwesomeIcon icon={faTrashAlt} size='1x' />
                    </CardDelete>
                </CardWrapper>
            )}
        </FavoritesWrapper>
    )
}
