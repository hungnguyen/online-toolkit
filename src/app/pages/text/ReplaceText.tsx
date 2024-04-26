import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ReplaceText(){
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [find, setFind] = useState<string>("");
    const [replace, setReplace] = useState<string>("");
    const handleClick=()=>{
        setOutput(input.replaceAll(find, replace));
    }
    
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">Replace Text</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter a string to find and string to replace then press "Apply" to process.
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="inputTxt"
                        label="Enter a string here"
                        multiline
                        rows={4}
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item md={12}>
                    <TextField id="findTxt" label="Enter text to find" variant="outlined" fullWidth value={find} onChange={(e)=>setFind(e.target.value)}/>
                </Grid>
                <Grid item md={12}>
                    <TextField id="replaceTxt" label="Enter text to replace" variant="outlined" fullWidth value={replace} onChange={(e)=>setReplace(e.target.value)}/>
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" onClick={handleClick}>Apply</Button>
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="outputTxt"
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