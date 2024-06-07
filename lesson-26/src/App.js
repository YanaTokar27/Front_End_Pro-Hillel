import { Component } from 'react';
import './App.css';
// import Input from './components/Input/input';
// import TextBlock from './components/Text/Text';
// import Select from './components/Select/Select';
// import Clock from './components/Clock/Clock';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';
import Toggle from './components/Toggle/Toggle';
import Form from './components/Form/Form';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isError: false,
      isLoadind: true,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const response = await fetch('https://6628f7e654afcabd0737a2a7.mockapi.io/users');

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json();

      this.setState({ users: data, isLoadind: false });
    } catch (error) {
      this.setState({
        isError: true,
        isLoadind: false
      });
    }
  }

  render() {
    const { users, isError, isLoadind } = this.state;

    //   const number = 0;
    //   if(number > 1) {
    //   return <div>Hello!</div>
    // }
    return (
      <div className="App">
        <header className="App-header">
          {/* {formatName(user)} */}

          {/* <Input labelName="Name" className='row' />
          <Input labelName="Age" />
          <TextBlock text="Something" /> */}
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

          {/* <Clock /> */}
          <Form />
          <Toggle />
          <Profile user={users[0]} />
          <Profile user={users[1]} />
          <Users users={users} isError={isError} isLoadind={isLoadind} />
        </header>
      </div>
    );
  }
}

export default App;
