let users = [
    {
        login: 'Admin1',
        password: 'Admin123'
    },
    {
        login: 'Admin2',
        password: 'Admin456'
    }
]

class userModel {
    findOne = (loginRequest) => {
        const user = users.find(user => user.login === loginRequest.login && user.password === loginRequest.password);

        return new Promise(resolve => resolve(user))
    }
}


module.exports = new userModel();