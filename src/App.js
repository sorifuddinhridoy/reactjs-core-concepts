import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New component. YAY</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person(){
  return (
    <div className='person'>
      <h1>Sakib All Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}
function Friend(){
  return (
    <div className='container'>
      <h3>Name: Ajoy Devgun</h3>
      <p>Job: maramari</p>
    </div>
  )
}
export default App;
