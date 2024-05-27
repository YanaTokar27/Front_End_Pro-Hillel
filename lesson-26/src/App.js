import logo from './logo.svg';
import './App.css';
import Input from './components/Input/input';
import TextBlock from './components/Text/Text';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

function App() {
  const number = 0;
  if (number > 1) {
    return <div>Hello!</div>
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {formatName(user)} */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Input labelName="Name" className='row' />
        <Input labelName="Age" />
        <TextBlock text="Something" />
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
