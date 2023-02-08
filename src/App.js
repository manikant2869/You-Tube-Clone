
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';

import {Feed , VideoDetail,Navbar,SearchDetail} from './Components'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        
        <Box sx={{backgroundColor:'#000'}}>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path='/search/:searchTerm' element={<SearchDetail />} />
          </Routes>
         </Box>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
