import React, { useCallback } from "react";
import styled from "styled-components";
import { Search } from "../../componnets";


const Layout = styled.div`
    display: flex;
    flex-direction: column
`;
const Header = styled.div`
    margin-top: 30px;
    font-size: 3rem;
    text-align: center;
`

const ContentContainer = styled.div`
    margin-left: 30%;
    margin-right: 30%;
    margin-top: 40px;
`;

const GistView = () => {
    const onSearh = useCallback((value) => {

    }, []);
    return <Layout>
        <Header> Gist Viewer </Header>
        <ContentContainer>
            <Search onClick={onSearh} />
        </ContentContainer>
    </Layout>
}

export default GistView;