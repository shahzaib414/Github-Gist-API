import React, { useState } from 'react';
import { Gist } from 'types/github';
import { Card, Badge } from "components";
import styled from 'styled-components';
import Forks from "./forks";
import FileViewer from "./fileViewer";

interface Props {
    gists: Gist[];
}

const BadgesWrapper = styled.div`
    display: flex;
`;
const Content = ({ gists }: Props) => {
    return <>
        {gists.map((g, index) => (
            <Card title={g.description} key={index}>
                <BadgesWrapper>
                    {Object.keys(g.files).map((k, i) => (
                        <Badge key={i} color="#4118C9" text={g.files[k].language} />
                    ))}
                </BadgesWrapper>
                <FileViewer files={g.files} />
                <Forks gistId={g.id} />
            </Card>))}
    </>
}

export default Content