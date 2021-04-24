import React from "react";
import styled from "styled-components";

interface Props {
    text: string;
    color?: string;
}

const StyledDiv = styled.div<{ color: string }>`
    padding: 10px;
    margin-right: 5px;
    display: flex;
    border-radius: 50px;
    background-color: ${(props) => props.color};
    color: white;
    font-size: 14px;
`;

const Badge = ({ color, text }: Props) => {
    return <StyledDiv color={color || "#4118C9"}>
        {text}
    </StyledDiv>
}

export default Badge;