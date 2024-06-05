import logo from './logo.svg';
import './App.css';
import Input from './components/Input/input';
import TextBlock from './components/Text/Text';
// import Select from './components/Select/Select';
import Clock from './components/Clock/Clock';
import Users from './components/Users/Users';

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

        <Input labelName="Name" className='row' />
        <Input labelName="Age" />
        <TextBlock text="Something" />
        {/* <Select
          options={[{ value: 'volvo', name: 'Volvo' },
          { value: 'saab', name: 'Saab' },
          { value: 'mercedes', name: 'Mercedes' },
          { value: 'audi', name: 'Audi' }]} /> */}

        {/* варіант-2
        <Select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Select> */}

        <Clock />
        <Users />

      </header>
    </div>
  );
}

export default App;
