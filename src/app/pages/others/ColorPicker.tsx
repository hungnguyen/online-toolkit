import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";

export default function ColorPicker(){
    const [colorHex, setColorHex] = useState<string>("#fff");
    const [colorRgb, setColorRgb] = useState<string>("");
    const [colorHsl, setColorHsl] = useState<string>("");
    const handleChangeComplete = (color: ColorResult) => {
        setColorHex(color.hex);
        setColorRgb(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`);
        setColorHsl(`hsla(${Math.floor(color.hsl.h)},${toPercent(color.hsl.s)},${toPercent(color.hsl.l)},${color.hsl.a})`);
      };
      const toPercent = (num: number): string =>{
        return `${Math.floor(num * 100)}%`;
      }
    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">Color Picker</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Select a color or enter a hex color.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <SketchPicker color={ colorHex }
                        onChangeComplete={ handleChangeComplete }/>
                    
                </Grid>
                <Grid item md={6}>
                    <TextField
                        label="Hex Color"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        value={colorHex}
                        onChange={(e)=>setColorHex(e.target.value)}
                        
                        />
                        <br />
                    <TextField
                        label="Rgb Color"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        value={colorRgb}
                        disabled
                        />
                        <br />
                    <TextField
                        label="Hsl Color"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        value={colorHsl}
                        disabled
                        />
                </Grid>
            </Grid>
        </>
    )
}