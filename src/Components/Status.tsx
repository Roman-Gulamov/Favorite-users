import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import { IStatus } from '../interfaces/interface';

import { StatusMessage, Text } from '../styles/Status';


export const Status = ({ message, spinner }: IStatus): JSX.Element => {
    return (
        <Container>
            <StatusMessage>
            {spinner ?
                <Spinner animation="border" role="status" variant="success">
                    <span className="sr-only">{message}</span>
                </Spinner> 
            :
                <Text>{message}</Text>
            }
            </StatusMessage>
        </Container>
    )
}
