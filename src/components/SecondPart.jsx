import { Paper, Grid, TextField, Button } from '@mui/material';

function SecondPard({ handleSubmitSecondPart, formValueSecondPart, handleChangeSecondPart }) {
  return (
    <Paper elevation={2} sx={{ padding: '40px' }}>
      <form onSubmit={handleSubmitSecondPart} style={{ height: '100%' }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={4}
        >
          <Grid item sx={{ width: '100%' }}>
            <TextField
              id="mail-input"
              name="mail"
              label="Mail"
              type="text"
              fullWidth
              value={formValueSecondPart}
              margin="none"
              required
              sx={{ width: '100%' }}
              onChange={handleChangeSecondPart}
            />
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: '100%' }}
            >
              Check
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default SecondPard;
