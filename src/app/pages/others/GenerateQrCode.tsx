import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function GenerateQrCode(){
    const [value, setValue] = useState<string>("");
    const [input, setInput] = useState<string>("");
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">Generate QR Code</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter text and press "Generate" to generate qr code picture.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Enter text here" variant="outlined" fullWidth multiline rows={10}
                        value={value} onChange={(e)=>setValue(e.target.value)}/>
                    
                </Grid>
                <Grid item md={6}>
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
                    <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={input}
                    viewBox={`0 0 256 256`}
                    />
                </div>
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" onClick={()=>setInput(value)}>Generate</Button>
                </Grid>
            </Grid>
        </>
    )
}