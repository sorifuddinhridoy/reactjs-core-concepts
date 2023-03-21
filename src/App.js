import logo from './logo.svg';
import './App.css';
/*class-4 nayok,nayika */
function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Mousumi"></Person>
      <Person name="BappaRaz" nayika="chekha"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
      <h5>New component. YAY</h5>
      <p>rock mama React mama.</p>
      <Friend phone="01777"></Friend>
      <Friend phone="019999"></Friend>
    </div>
  );
}

function Person(props){
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}
function Friend(props){
  return (
    <div className='container'>
      <h3>Name: Ajoy Devgun</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
export default App;
