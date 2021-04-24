import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Search } from "components";
import { GithubGistAPI } from "api";
import { Gist } from "types/github";
import Content from "./content"


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
    const [gists, setGists] = useState<Gist[]>([]);
    const [user, setUser] = useState<string>();

    const fetchUser = async (user: string) => {
        const api = new GithubGistAPI();
        const { status, data } = await api.getGistByUser(user);
        if (status === 200) {
            setGists(data)
        }
    }
    
    useEffect(() => {
        if (user) fetchUser(user);
    }, [user])


    const onSearh = (value: string) => {
        setUser(value)
    }
    return <Layout>
        <Header> Gist Viewer </Header>
        <ContentContainer>
            <Search onClick={onSearh} />
            <Content gists={gists}/>
        </ContentContainer>
    </Layout>
}

export default GistView;