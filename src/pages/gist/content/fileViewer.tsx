import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { GistFile } from "types/github";
import styled from "styled-components";

interface Props {
    files: GistFile
}

interface File {
    content: string;
    language: string;
}

const StyledDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const FileViewer = ({ files }: Props) => {
    const [filesContent, setFilesContent] = useState<File[]>([]);

    useEffect(() => {
        filesContent.length === 0 && Object.keys(files).map(async f => {
            const fileContent = await (await fetch(files[f].raw_url)).text();
            setFilesContent(filesContent.concat([{ content: fileContent, language: files[f].language }]))
            console.log(filesContent)
        })
    }, [])

    return <StyledDiv>
        {filesContent.map(c => (<CopyBlock
            text={c.content}
            language={c.language}
            showLineNumbers={true}
            wrapLines
            theme={dracula}
        />))}
    </StyledDiv>

}

export default FileViewer;