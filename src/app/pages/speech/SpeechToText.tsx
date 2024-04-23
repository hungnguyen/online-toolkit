import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Layout from '../../components/Layout';
import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { Mic, RestartAlt, Stop } from '@mui/icons-material';

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Layout>
        <Grid container spacing={3}>
            <Grid item md={12}>
                <Typography variant="h4" component="h2">Speech To Text</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Press "Start" and say something to convert your voice to text.
                </Typography>
            </Grid>
            <Grid item md={12}>
                <Typography variant="subtitle2" display="block" gutterBottom>
                    Microphone: {listening ? 'on' : 'off'}
                </Typography>
                <ButtonGroup variant="outlined" aria-label="Loading button group" sx={{mt:2, mb: 2}}>
                    <Button variant='contained' onClick={()=>SpeechRecognition.startListening()} startIcon={<Mic />}>Start</Button>
                    <Button variant='contained' onClick={SpeechRecognition.stopListening} startIcon={<Stop />}>Stop</Button>
                    <Button variant='contained' onClick={resetTranscript} startIcon={<RestartAlt />}>Reset</Button>
                </ButtonGroup>
                <Typography variant="subtitle2" display="block" gutterBottom>
                    <b>Your text here:</b> <br />{transcript}
                </Typography>
            </Grid>
        </Grid>
      
    </Layout>
  );
};
export default SpeechToText;