import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import Example from './components/example';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{background:'#000'}}>
        <Routes>
           <Route path='/' />
           <Route path='/' />
           <Route path='/' />
           <Route path='/' />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
