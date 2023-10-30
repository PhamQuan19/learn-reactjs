import logo from './logo.svg';
import './App.css';

function App() {
  const name='Quan';
  const age=22;
  const isFemal=true;
  const student={
    name:'Qtech'
  };

  const colorList=['red','green','blue'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pham Quan
        </p>
        <p>Xin chao {name} - {age} - {isFemal ? 'Male': 'Female'}</p>
        <p>{student.name}</p>

        <ul>
          {colorList.map(color =>(
            <li style={{color}}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
