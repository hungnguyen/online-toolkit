import { Download } from "@mui/icons-material";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Webcam from "react-webcam";

export default function YourWebcam(){
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const videoConstraints = {
        width: 640,
        height: 360,
        facingMode: "user"
      };
    const webcamRef = React.useRef<Webcam | null>(null);
  const capture = React.useCallback(
    () => {
        setImageSrc(webcamRef.current!.getScreenshot());
    },
    [webcamRef]
  );
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <Typography variant="h4" component="h2">Your Webcam</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Grant permission to access your webcam and enjoy.
                    </Typography>
                </Grid>
                <Grid item md={12}>
                <Webcam
                    audio={false}
                    height={360}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={640}
                    videoConstraints={videoConstraints}
                />
                </Grid>
                <Grid item md={12}>
                    <ButtonGroup variant="outlined">
                        {imageSrc && (
                            <Button variant="contained" href={imageSrc} startIcon={<Download />}>
                                Download Image
                            </Button>
                        )}
                        <Button variant="contained" onClick={capture}>Capture Image</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </>
    )
}