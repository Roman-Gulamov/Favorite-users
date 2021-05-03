import Container from 'react-bootstrap/Container';

import { MyTable, UsersSearch } from '../../styles/Users';

import { UsersCards } from './UsersCards';


export const Users = (): JSX.Element => {
    return (
        <Container>
            <MyTable striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>
                            <UsersSearch 
                                type="text" 
                                placeholder="Поиск.."
                            />
                        </th>
                        <th>Избранные</th>
                    </tr>
                </thead>
                <tbody>
                    <UsersCards />
                </tbody>
            </MyTable>
        </Container>
    )
}


