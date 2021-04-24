import React, { useEffect, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import styled from "styled-components";
import { Switch, FormControlLabel } from '@material-ui/core';
import { GistFile, File } from "types/github";
import { GithubGistAPI } from "api";


interface Props {
    files: GistFile
}

const StyledDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const CodeBlockWrapper = styled.div`
margin-top: 20px;
`;
const FileViewer = ({ files }: Props) => {
    const api = new GithubGistAPI();
    const [filesContent, setFilesContent] = useState<File[]>([]);
    const [showFiles, setShowFiles] = useState<boolean>(false);

    useEffect(() => {
        fetchFilesContent(files)
    }, [files])

    const fetchFilesContent = async (files: GistFile) => {
        const res = await api.getFilesContent(files);
        setFilesContent(res)
    }

    const handleChange = (event: any) => {
        setShowFiles(!showFiles)
    }

    const ViewerWrapper = () => {
        return filesContent.map((c, index) => {
            return <CodeBlockWrapper>
                {showFiles && <CodeBlock
                    key={index}
                    text={c.content}
                    language={c.language}
                    showLineNumbers={true}
                    theme={dracula} />}
            </CodeBlockWrapper>
        }
        )
    }

    return <StyledDiv>
        <FormControlLabel
            control={
                <Switch
                    checked={(showFiles) || false}
                    onChange={handleChange}
                    name="showFiles"
                    color="primary"
                />
            }
            label="Show File"
        />
        {ViewerWrapper()}
    </StyledDiv>

}

export default FileViewer;