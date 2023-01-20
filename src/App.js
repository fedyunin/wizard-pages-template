import { Box, Button, CircularProgress, createTheme, CssBaseline, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const mdTheme = createTheme();

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6'];

function App() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Stepper activeStep={step} alternativeLabel sx={{ padding: 2, border: '1px solid lightgray' }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Grid container sx={{ padding: 2, border: '1px solid lightgray', height: '90%' }}>
            <Grid item xs={8} sx={{ padding: 2, border: '1px solid lightgray', margin: '0 auto', textAlign: 'center' }}>
              {loading && <CircularProgress sx={{ margin: '15%', position: 'absolute' }} />}
              <img src={'https://picsum.photos/600/60' + step} alt='drawing here' onLoad={() => setLoading(false)} />
            </Grid>
            <Grid item xs={4} sx={{ padding: 2, border: '1px solid lightgray', margin: '0 auto', textAlign: 'center', overflowY: 'auto' }}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <Button sx={{ width: 150 }} variant='outlined' disabled={step === 0} onClick={() => { setStep(step - 1); setLoading(true) }}>Prev</Button>
                </Grid>
                <Grid item xs>
                  <Button sx={{ width: 150 }} variant='outlined' disabled={step === steps.length - 1} onClick={() => { setStep(step + 1); setLoading(true) }}>Next</Button>
                </Grid>
              </Grid>
              <Typography variant='subtitle1' sx={{ marginTop: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam rhoncus, consectetur tortor a, scelerisque neque. Pellentesque consequat, ligula sed ullamcorper lacinia, leo felis commodo nisi, nec ornare tellus mi non ipsum. Phasellus felis sapien, ultricies vel tortor faucibus, egestas dignissim ante. Cras id metus a lorem semper auctor. Phasellus vitae magna arcu. Pellentesque rhoncus ultricies nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempor metus quis dolor consequat egestas. Nam egestas felis vel magna hendrerit, consequat rhoncus augue viverra. In vitae imperdiet est. Quisque eleifend velit et tristique ultricies.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
