import './css/App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Beder Danskman
      <br></br>
      <nav className='navBar'> 
        <Link to="/ansoka" >Ansöka</Link> | 
        <Link to="/kurser" >Kurser</Link> |
        <Link to="/personal" >Personal</Link> |
        <Link to="/utbildningar" >Utbildningar</Link> 
      </nav>
    </div>
  );
}

export default App;
