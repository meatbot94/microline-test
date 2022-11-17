import { Button, Grid, Paper, TextField } from '@mui/material';

function FirstPart({ handleChangeFirstPart, handleSubmitFirstPart, formValueFirstPart }) {
  return (
    <Paper elevation={2} sx={{ padding: '40px' }}>
      <form onSubmit={handleSubmitFirstPart} style={{ height: '100%' }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={4}
        >
          <Grid item sx={{ width: '100%' }}>
            <TextField
              id="url-input"
              name="url"
              label="Url"
              type="text"
              fullWidth
              value={formValueFirstPart}
              margin="none"
              required
              sx={{ width: '100%' }}
              onChange={handleChangeFirstPart}
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
              Download
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default FirstPart;
