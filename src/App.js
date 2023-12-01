
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Home1 from './components/Home1';

function App() {
  
  return (
  
    <div >
      
     <Routes>
      <Route path='/' element={<Home/>}/>
      

     </Routes>
      
     <Header/>
     <Home1></Home1>
     <Footer/>
     

      
     
      </div>
     
  );
}

export default App;
