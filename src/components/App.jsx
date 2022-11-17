import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FirstPart from './FirstPart';
import SecondPard from './SecondPart';

function App() {
  const [formValueFirstPart, setFormValueFirstPart] = useState('');
  const [formValueSecondPart, setFormValueSecondPart] = useState('');

  const config = {
    read: ['sample@email.com', 'mark@fb.com', 'whoami@dot.com', 'test@email.com'],
    write: ['sample@email.com', 'test@email.com'],
  };

  function handleChangeFirstPart(e) {
    setFormValueFirstPart(e.target.value);
  }

  function handleChangeSecondPart(e) {
    setFormValueSecondPart(e.target.value);
  }

  function fetchFile(url) {
    fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        let url = URL.createObjectURL(file);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'downloadedFile';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmitFirstPart(e) {
    e.preventDefault();
    fetchFile(formValueFirstPart);
  }

  function handleSubmitSecondPart(e) {
    e.preventDefault();
    const readStatus = config.read.some((item) => formValueSecondPart === item);
    const writeStatus = config.write.some((item) => formValueSecondPart === item);
    console.log(`User can read: ${readStatus}, User can write: ${writeStatus}`);
  }

  function handleSwitch() {
    if (window.location.pathname === '/') {
      window.location.pathname = '/second';
    } else {
      window.location.pathname = '/';
    }
  }

  return (
    <Container maxWidth="md">
      <div
        style={{
          width: '100%',
          height: '100vh',
          padding: '80px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '100%' }}>
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" align="left" sx={{ flexGrow: 1 }}>
                Microline
              </Typography>
              <Button variant="outlined" size="small" color="inherit" onClick={handleSwitch}>
                Switch
              </Button>
            </Toolbar>
          </AppBar>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <FirstPart
                    handleChangeFirstPart={handleChangeFirstPart}
                    handleSubmitFirstPart={handleSubmitFirstPart}
                    formValueFirstPart={formValueFirstPart}
                  />
                }
              />
              <Route
                path="/second"
                element={
                  <SecondPard
                    handleSubmitSecondPart={handleSubmitSecondPart}
                    formValueSecondPart={formValueSecondPart}
                    handleChangeSecondPart={handleChangeSecondPart}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Container>
  );
}

export default App;
