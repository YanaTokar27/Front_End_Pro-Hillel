import { useEffect, useState } from 'react';

const Iterator = () => {
    const [count, setCount] = useState(0);
    // const [value, setValue] = useState({
    //     firstName: 'User',
    //     lastName: 'Test'
    // });

    useEffect(() => {
        console.log('Call');

        return () => {
            console.log('Unmount');
        }
    }, [count]);

    return (
        <div>
            <p>Ви натиснули {count} разів</p>
            <button onClick={() => setCount(count + 1)}>
                Натисни мене
            </button>
        </div>
    );

    // return (
    //     <div>
    //         <p>User name: {value.firstName}, user last name: {value.lastName}</p>
    //         <button onClick={() => setValue(prevState => ({
    //             ...prevState,
    //             firstName: 'Yana'
    //         }))}>Натисни мене</button>
    //     </div>
    // )
}

export default Iterator;