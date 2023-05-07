import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Resenhas from './pages/Resenhas/Resenhas';
import ContagemContext from './Components/Context/ContagemContext';
import { useState } from 'react';

function App() {
  const [contagemLido, setContagemLido] = useState(70)
  const [contagemVouLer, setContagemVouLer] = useState(300)
  return (
    

      <ContagemContext.Provider value={{contagemLido, setContagemLido,contagemVouLer,setContagemVouLer}}>
          
          <div className="App">
            <Header />

            <hr />
            <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resenhas' element={<Resenhas />} />
                
              </Routes>
            </Router>


          </div>
      </ContagemContext.Provider>
      
  );
}

export default App;
