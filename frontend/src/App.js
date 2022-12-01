import './App.css';
import Navbar from './components/Navbar';
import Login from './Login';
import Report from './Report';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>REACT</h1>
      <Report></Report>
    </div>
  );
}

export default App;
