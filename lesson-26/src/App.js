import { createContext, useState, useEffect } from 'react';
import './App.css';
// import Input from './components/Input/input';
// import TextBlock from './components/Text/Text';
// import Select from './components/Select/Select';
// import Clock from './components/Clock/Clock';
import Users from './components/Users/Users';
// import Profile from './components/Profile/Profile';
// import Toggle from './components/Toggle/Toggle';
// import FunctionalToggle from './components/Toggle/FunctionalToggle';
import Form from './components/Form/HookForm';
// import Iterator from './components/Iterator/Iterator';
// import Reducer from './components/useReducer/useReduser';

export const UserContext = createContext();

const App = () => {
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try {
            const response = await fetch(
                'https://6628f7e654afcabd0737a2a7.mockapi.io/users'
            );

            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json();

            setUsers(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        };
    }

    return (
        <UserContext.Provider value={{
            user: 'Test',
        }}>
            <div className="App">
                <header className="App-header">

                    {/* <Input labelName="Name" className='row' />
                <Input labelName="Age" />
                <TextBlock text="Something" /> */}
                    {/* <Select
          options={[{ value: 'volvo', name: 'Volvo' },
          { value: 'saab', name: 'Saab' },
          { value: 'mercedes', name: 'Mercedes' },
          { value: 'audi', name: 'Audi' }]} />

          {/* варіант-2
        <Select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Select> */}

                    {/* <Clock /> */}
                    {/* <Form /> */}
                    {/* <Toggle /> */}
                    <Form />
                    {/* <Profile user={users[0]} /> */}
                    {/* <Profile user={users[1]} /> */}
                    <Users users={users} isError={isError} isLoadind={isLoading} />
                    {/* <Iterator /> */}
                    {/* <FunctionalToggle /> */}
                    {/* <Reducer /> */}
                </header>
            </div>
        </UserContext.Provider>
    );
}


export default App;
