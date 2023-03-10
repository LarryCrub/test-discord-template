import { Routes, Route } from 'react-router-dom';
import ServerLayout from './components/ServerLayout';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ServerLayout />} />
      <Route  exact path='/:id' element={<ServerLayout />}/>
    </Routes>
    
  );
}

export default App;
