import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout";

export default function TextPattern(){
    const [value, setValue] = useState<string>("");
    const [regex, setRegex] = useState<string>("");
    const [isMatch, setIsMatch] = useState<boolean | undefined>(undefined);
    const handleClick=()=>{
        var pattern = new RegExp(regex);
        setIsMatch(pattern.test(value));
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">Text Pattern</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter regex pattern and text to test if the text is match with regex pattern.
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <TextField id="outlined-basic" label="Enter regex pattern here" variant="outlined" fullWidth value={regex} onChange={(e)=>setRegex(e.target.value)}/>
                    
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
                        Is Match?: {isMatch?.toString()}
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" onClick={handleClick}>Apply</Button>
                </Grid>
            </Grid>
        </>
    )
}