import { useContext } from 'react';
import Context from '../../services/context';
import Container from 'react-bootstrap/Container';

import { ListCards } from './ListCards';

import { 
    UsersWrapper,
    UsersHeadings,
    HeadingSearch,
    HeadingFavorite,
    UsersList,
    ListFavorites } from '../../styles/Users';


export const Users = (): JSX.Element => {
    const listProps = useContext(Context);

    return (
        <Container>
            <UsersWrapper>
                <UsersHeadings>
                    <HeadingSearch>
                        <input 
                            type="text" 
                            placeholder="Поиск.."
                            onInput={event => listProps.searchName(event, listProps.searchRef)}
                        />
                    </HeadingSearch>
                    <HeadingFavorite>Избранные</HeadingFavorite>
                </UsersHeadings>
                <UsersList>
                    <ListCards />
                    <ListFavorites>123</ListFavorites>
                </UsersList>
            </UsersWrapper>
        </Container>
    )
}


