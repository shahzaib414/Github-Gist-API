import React, { ChangeEvent, useState } from 'react';
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core"

const StyledDiv = styled.div`
justify-content: center;
display: flex;

    .MuiFormControl-root,
    .MuiTextField-root {
        width: 50%;
    }

    .MuiButton-containedPrimary {
        margin-left: 20px;
    }
`;

interface Props {
    searchPlaceHolder?: string;
    onClick: (value: string) => void;
    searchButtonText?: string
}

const Search = ({ searchButtonText, searchPlaceHolder, onClick }: Props) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const placeholder = searchPlaceHolder || 'Search';

    const onTextChangeHanlder = (value: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearchQuery(value.target.value)
    };
    return <StyledDiv>
        <TextField id="standard-basic" label={placeholder} value={searchQuery} onChange={onTextChangeHanlder} />
        <Button variant="contained" color="primary" onClick={() => onClick(searchQuery)}>
            {searchButtonText || `Search`}
        </Button>
    </StyledDiv>
}

export default Search;