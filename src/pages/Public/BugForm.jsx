import { useState, useContext, useEffect } from 'react';
import validator from 'validator';
import { useForm, Controller } from "react-hook-form";

import {
    Box,
    TextField,
} from "@mui/material";

import Page from "components/Page";


const Error404 = () => {
    const { control, handleSubmit } = useForm();

    const [errorMessage, setErrorMessage] = useState('')
    const validateURL = (value) => {
        if (!value) {
            setErrorMessage('')
        } else if (!validator.isURL(value)) {
            setErrorMessage('Not a Valid URL')
        }
        else {
            setErrorMessage('')
        }
    }

    const onSubmit = async (data) => {

    };

    return (
        <Page>
            <Box
                p={4}
                width="100"
                height="60vh"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <h1> BUG REPORT FORM </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        fullWidth
                        label="URL*"
                        placeholder="Where you faced the error    "
                        variant="outlined"
                        onChange={(e) => validateURL(e.target.value)}
                    />
                    <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                        {errorMessage}
                    </span>
                    <br />

                    <TextField
                        fullWidth
                        label="Title*"
                        variant="outlined"
                    />
                    <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'white',
                    }}> &nbsp; </span>

                    <TextField
                        multiline
                        fullWidth
                        label="Description*"
                        placeholder="Description about the bug."
                        variant="outlined"
                        rows={5}
                    />
                </form>
            </Box>
        </Page>
    );
};

export default Error404;
