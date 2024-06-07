import { Component } from "react";
import { FaSpinner } from "react-icons/fa";

class Users extends Component {
    render() {
        const { users, isError, isLoadind } = this.props;
        return (
            <div>
                <h1>Users</h1>
                {isLoadind ? <FaSpinner /> : (users.map(user =>
                    <div key={user.id}>
                        <img src={user.avatar} alt="Avatar" />
                        <p>{user.name}</p>
                        <p>{user.last_name}</p>
                    </div >))
                }
                {isError && (<p>Ooops something went wrong</p>)}
            </div >
        );
    }
}

export default Users;