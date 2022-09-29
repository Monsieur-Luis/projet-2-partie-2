import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Films from './Film/components/Films';
import FilmDetail from './Film/components/FilmDetail';
import AuthLayout from './auth/components/AuthLayout'
import AppContainer from './auth/components/AppContainer'
function App() {
  return (
 <Router>
  <Navbar/>
  <AppContainer>
  <div className='container'>
  <Routes>
  <Route  path='login' element={<AuthLayout/>}/>
   <Route  path='/' element={<Films/>}/>
   <Route  path='/film/:id' element={<FilmDetail/>}/>
  </Routes>
  </div>
  </AppContainer>
 </Router>

  );
}

export default App;
