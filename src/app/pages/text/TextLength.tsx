import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout";

export default function TextLength(){
    const [value, setValue] = useState<string>("");
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">Text Length</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter text or paragrpah to get length of text or paragraph.
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Enter text or paragraph here"
                        multiline
                        rows={4}
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        fullWidth
                    />
                    <Typography variant="caption" display="block" gutterBottom>
                        Text length: {value.length}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}