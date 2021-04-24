import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Avatar } from "@material-ui/core"
import { Alert } from "@material-ui/lab";
import { GithubGistAPI } from "api";
import { GistFork } from 'types/github';

interface Props {
    gistId: string
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const StyledText = styled.div<{ fontWeight: string, fontSize: number }>`
    font-weight: ${(props) => props.fontWeight};
    font-size:  ${(props) => props.fontSize}px;
`;

const DetailsView = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-right: 10px;
    .Avatar { 
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
`;

const Forks = ({ gistId }: Props) => {
    const api = new GithubGistAPI();
    const [forks, setForks] = useState<GistFork[]>([]);
    const [error, setError] = useState<string>('');

    const fetchForksByGistId = async (gistId: string) => {
        try {
            const { status, data } = await api.getForksByGistId(gistId);
            if (status === 200) {
                setForks(data);
            }
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchForksByGistId(gistId);
    }, [gistId])

    return <StyledDiv>
       {forks.length > 0 &&  <StyledText fontSize={14} fontWeight="bold"> Forked </StyledText>}
        {forks.map(({ owner }, index) => (
            index <=3 && <DetailsView key={index}>
                <Avatar alt="Remy Sharp" src={owner.avatar_url} className="Avatar" />
                <StyledText fontSize={16} fontWeight="500"> {owner.login} </StyledText>
            </DetailsView>
        ))}
         {error && <Alert severity="error">{error}</Alert>}
    </StyledDiv>
}

export default Forks