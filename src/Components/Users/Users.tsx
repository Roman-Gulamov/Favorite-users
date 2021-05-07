import { useContext } from 'react';
import Context from '../../services/context';
import Container from 'react-bootstrap/Container';

import { ListUsers } from './ListUsers';
import { ListFavorites } from './ListFavorites';

import { 
    UsersWrapper,
    UsersHeadings,
    HeadingSearch,
    HeadingFavorite,
    UsersList } from '../../styles/Users';


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
                            onInput={event =>
                                listProps.searchName(event, listProps.searchRef)
                            }
                        />
                    </HeadingSearch>
                    <HeadingFavorite>Избранные</HeadingFavorite>
                </UsersHeadings>
                <UsersList>
                    <ListUsers />
                    <ListFavorites />
                </UsersList>
            </UsersWrapper>
        </Container>
    )
}