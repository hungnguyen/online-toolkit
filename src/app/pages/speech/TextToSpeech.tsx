import { Pause, PlayArrow,  Stop } from "@mui/icons-material";
import { Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const TextToSpeech = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [text,setText] = useState<string>("Welcome to text to speech!");
  const [rate, setRate] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);
  const synth = window.speechSynthesis;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceIndex, setVoiceIndex] = useState<number>(0);

  const voiceSort = (a: SpeechSynthesisVoice, b: SpeechSynthesisVoice) => {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  }
  function setSpeech() {
    let id: number;

    id = setInterval(() => {
        if (synth.getVoices().length !== 0) {
            setVoices(synth.getVoices().sort(voiceSort));
            clearInterval(id);
        }
    }, 10);
}
  useEffect(()=>{
    if(voices.length<=0){
      setSpeech();
    }
  },[]);
  
  useEffect(() => {
    
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    if (isPaused) {
      synth.resume();
    }
    utterance!.pitch = pitch;
    utterance!.rate = rate;
    utterance!.voice = voices[voiceIndex];
    synth.speak(utterance!);

    setIsPaused(false);
  };

  const handlePause = () => {
    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    synth.cancel();

    setIsPaused(false);
  };

  return (
    <Layout>
        <Grid container spacing={3}>
            <Grid item md={12}>
                <Typography variant="h4" component="h2">Speech To Text</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Enter something as your wish and press "Play" to listen to your with selected voice.
                </Typography>
            </Grid>
            <Grid item md={12}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth value={text} onChange={(e)=>setText(e.target.value)}/>
            </Grid>
            <Grid item md={12}>
              <Typography gutterBottom>Rate</Typography>
                <Slider aria-label="Default" valueLabelDisplay="auto" min={0.5} max={2} step={0.1} value={rate}
                    onChange={(_, value)=>setRate(value as number)}/>
            </Grid>
            <Grid item md={12}>
              <Typography gutterBottom>Pitch</Typography>
                <Slider aria-label="Default" valueLabelDisplay="auto" min={0} max={2} step={0.1} value={pitch} 
                    onChange={(_, value)=>setPitch(value as number)}/>
            </Grid>
            <Grid item md={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Voice</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={voiceIndex}
                        label="Voice"
                        onChange={(e)=>setVoiceIndex(Number(e.target.value))}
                    >
                        {voices.map((v, index)=>(
                            <MenuItem key={v.name} value={index}>{`${v.name} (${v.lang})`}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                
                <ButtonGroup variant="outlined" aria-label="Loading button group">
                    <Button variant='contained' onClick={handlePlay} startIcon={<PlayArrow />}>{isPaused ? "Resume" : "Play"}</Button>
                    <Button variant='contained' onClick={handlePause} startIcon={<Pause />}>Pause</Button>
                    <Button variant='contained' onClick={handleStop} startIcon={<Stop />}>Stop</Button>
                </ButtonGroup>
                
            </Grid>
        </Grid>
      
    </Layout>
    
  );
};

export default TextToSpeech;