import { Routes, BrowserRouter, Route} from 'react-router-dom';
import './App.css';  
import { Signin } from './containers/SignIn';
import { Signup } from './containers/SignUp';
import { Home } from './containers/Home';


function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/signin' Component={Signin}/>
      <Route path='/signup' Component={Signup}/> 
    </Routes> 
    </BrowserRouter> 
    </div>
  );
}

export default App;
