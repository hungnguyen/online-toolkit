import { LinkOff, Link } from "@mui/icons-material";
import { Button, ButtonGroup, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function UrlEnDeCode(){
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const handleEncode=()=>{
        setOutput(encodeURIComponent(input));
    }
    const handleDecode=()=>{
        setOutput(decodeURIComponent(input));
    }
    
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">URL Encode & Decode</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter a string then press "Endode/Decode" to process.
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Enter a string here"
                        multiline
                        rows={4}
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item md={12}>
                    <ButtonGroup variant="outlined">
                        <Button variant="contained" onClick={handleEncode} startIcon={<LinkOff />}>Encode</Button>
                        <Button variant="contained" onClick={handleDecode} startIcon={<Link />}>Decode</Button>
                    </ButtonGroup>
                    
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Result here"
                        multiline
                        rows={4}
                        value={output}
                        fullWidth
                    />
                </Grid>
                
            </Grid>
        </>
    )
}