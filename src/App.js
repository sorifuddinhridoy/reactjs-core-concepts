import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Dr.Mahfuz', job: 'singer'}
const singer2 = {name: 'Eva Rahman', job: 'Singer2'}
const singerStyle ={
  color: 'purple',
  backgroundColor:'white',
  borderRadius:'20px'
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello DUde React. How are you</h3>
        </div>
        <div className="music">
          <p style={singerStyle}>Name: {number} </p>
          <p style={{color:'blue', backgroundColor:'red'}}>Name: {singer.name} {singer.job}</p>
          <p>Name: {singer2.name} {singer2.job}	</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
