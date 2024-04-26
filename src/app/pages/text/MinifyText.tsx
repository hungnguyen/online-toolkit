import { LinkOff } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function MinifyText(){
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const handleClick=()=>{
        setOutput(input.replace(/\s+/g, ''));
    }
    
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">Minify Text</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter a string to minify, then press "Apply" to process. All linebreaks and white spaces will be removed.
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
                    <Button variant="contained" onClick={handleClick}>Apply</Button>
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