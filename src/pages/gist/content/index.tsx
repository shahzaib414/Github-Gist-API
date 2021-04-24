import React from 'react';
import { Gist } from 'types/github';
import { Card, Badge } from "components";
import styled from 'styled-components';
import Forks from "./forks";

interface Props {
    gists: Gist[];
}

const BadgesWrapper = styled.div`
    display: flex;
`;
const Content = ({ gists }: Props) => {
    return <>
        {gists.map((g) => (
            <Card title={g.description}>
                <BadgesWrapper>
                    {Object.keys(g.files).map(k => (
                        <Badge color="#4118C9" text={g.files[k].language} />
                    ))}
                </BadgesWrapper>
                <Forks gistId={g.id} />
            </Card>))}
    </>
}

export default Content