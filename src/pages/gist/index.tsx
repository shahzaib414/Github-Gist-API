import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Alert } from "@material-ui/lab";
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
    font-size: 2.5rem;
    font-weight: bold;
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
    const [error, setError] = useState<string>('');

    const fetchUser = async (user: string) => {
        const api = new GithubGistAPI();
        try {
            const { status, data } = await api.getGistByUser(user);
            if (status === 200) {
                setGists(data)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        if (user) {
            setGists([])
            setError('')
            fetchUser(user)
        };
    }, [user])


    const onSearch = (value: string) => {
        setUser(value)
    }
    return <Layout>
        <Header> Gist Viewer </Header>
        <ContentContainer>
            <Search onClick={onSearch} />
            <Content gists={gists} />
        </ContentContainer>
        {error && <Alert severity="error">{error}</Alert>}
    </Layout>
}

export default GistView;