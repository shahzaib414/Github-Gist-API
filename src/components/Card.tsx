import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
    title?: string
    onClick?: () => void
}

const CardView = styled.div`
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`;

const CardTitle = styled.div`
    margin: 20px;
    font-weight: bold;
`;

const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column
`; 

const Card = ({ children, title, onClick }: Props) => {
    return <CardView>
        <CardTitle>
            {title}
        </CardTitle>
        <CardContent>{children}</CardContent>
    </CardView>
}

export default Card;