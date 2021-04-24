import React, { useEffect, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import styled from "styled-components";
import { Switch, FormControlLabel } from '@material-ui/core';
import { GistFile } from "types/github";


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
    const [showFiles, setShowFiles] = useState<boolean[]>([]);

    useEffect(() => {
        filesContent.length === 0 && Object.keys(files).map(async f => {
            const fileContent = await (await fetch(files[f].raw_url)).text();
            setFilesContent(filesContent.concat([{ content: fileContent, language: files[f].language }]))
            console.log(filesContent)
        })
    }, [])

    const handleChange = (event: any) => {
        const states = [...showFiles];
        states[parseInt(event.target.name)] = !states[parseInt(event.target.name)]
        setShowFiles(states)
    }

    const ViewerWrapper = () => {
        return filesContent.map((c, index) => {
            return <div>
                <FormControlLabel
                    key={index}
                    control={
                        <Switch
                            checked={(showFiles[index]) || false}
                            onChange={handleChange}
                            name={`${index}`}
                            color="primary"
                            key={index}
                        />
                    }
                    label="Primary"
                />
                {showFiles[index] && <CodeBlock
                    text={c.content}
                    language={c.language}
                    showLineNumbers={true}
                    theme={dracula} />}
            </div>
        }
        )
    }

    return <StyledDiv>
        {ViewerWrapper()}
    </StyledDiv>

}

export default FileViewer;